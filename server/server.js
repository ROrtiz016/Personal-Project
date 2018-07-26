require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const axios = require('axios')
const controller = require('./controllers')
const mid = require('./middleware');
const stripe = require('stripe')('process.env.SECRET_KEY')
const bodyParser = require('body-parser')

app.use(express.static(`${__dirname}/../build`));

let {
  SERVER_PORT,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  REACT_APP_DOMAIN,
  CONNECTION_STRING,
  SESSION_SECRET,
  CALLBACK_URL,
  FRONTEND_DOMAIN
} = process.env
// console.log(process.env)
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next)=>{console.log(req.url, req.method, req.status); next();})

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB connected')
})
app.use(express.json())
app.use(mid.bypassAuthInDevelopment)


//Stripe Setup 
app.set("view engine", "pug");
app.use(require("body-parser").urlencoded({ extended: false }));

app.post('/api/payment', function (req, res, next) {
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function (err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200)
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    }
  });
});

//

app.get('/auth/callback', async (req, res) => {
  try{

  
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: CALLBACK_URL
  }

  let responseWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

  let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`
  )

  const db = req.app.get('db');
  let { sub, name, picture } = userData.data;
  let userExists = await db.find_user([sub]);
  if (userExists[0]) {
    req.session.user = userExists[0];
    res.redirect(`${FRONTEND_DOMAIN}/#/Home`)
  } else {
    db.create_user([sub, name, picture]).then(createdUser => {
      req.session.user = createdUser[0];
      res.redirect(`${FRONTEND_DOMAIN}/#/Home`)
    })
  }
}catch(err) {console.error(err)}
});

app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user)
  } else {
    res.status(401).send('Nice try sucka')
  }
});

app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.redirect(`${FRONTEND_DOMAIN}/#/`)
})

/////EndPoints//////
app.get('/api/electronics', controller.getElectProducts)
app.get('/api/gadgets', controller.getGadgetProducts)
app.get('/api/outdoors', controller.getOutdoorProducts)
app.get('/api/sea', controller.getSeaProducts)
app.get('/api/land', controller.getLandProducts)
app.get('/api/riding', controller.getRidingProducts)
app.get('/api/selectproduct/:id', controller.getSelectedProduct)
app.post('/api/addcart/:id', controller.addToCart)
app.delete('/api/cart/:id/:user', controller.delete)
app.delete('/api/delcart', controller.deleteAllCart)
app.get('/api/cart', controller.getUserCart)
app.put('/api/account/userInfo/:age/:email/:address/', controller.userUpdate)


app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})