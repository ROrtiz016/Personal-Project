const stripe = require('stripe')(process.env.SECRET_KEY);

module.exports = {

  //Electronic Product Request////////////////////
  getElectProducts: (req, res, next) => {
    const db = req.app.get('db')

    db.getElectronics()
      .then(electronics => res.status(200).send(electronics))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },

  // Gadget Product Request/////////////////////////////
  getGadgetProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.getGadgets()
      .then(gadgets => res.status(200).send(gadgets))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },

  //Outdoors Product Request///////////////////////
  getOutdoorProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.getOutdoors()
      .then(outdoors => res.status(200).send(outdoors))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },


  //Sea Product Request///////////////////
  getSeaProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.getSea()
      .then(sea => res.status(200).send(sea))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },

  //Land Product Request////////////////
  getLandProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.getLand()
      .then(land => res.status(200).send(land))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },

 ///Riding Product Request/////////// 
  getRidingProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.getRiding()
      .then(riding => res.status(200).send(riding))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Something is wrong' })
        console.log(err)
      })
  },

  // PRODUCT SELECTED REQUEST
  getSelectedProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { params } = req;

    db.getSelected_product([params.id])
      .then(selected => res.status(200)
        .send(selected))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            'Something is wrong'
        })
        console.log(err)
      })
  },

  //////ADD TO CART PLUS QUANTITY//////
  addToCart: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {id: userId} = req.session.user 
    if(req.body.quantity) { 
      db.add_to_cart([userId, id, req.body.quantity])
      .then( cart => {
        return res.send(cart)
      })
    } else {
      db.check_cart_for_product([id, userId])
      .then( result => {
        let qty = result[0] ? result[0].quantity : 0;
        qty++ 
        db.add_to_cart([userId, id, qty])
        .then(cart => res.status(200).send(cart))
        .catch(err => {
          res.status(500).send({
            errorMessage: 'Something went wrong!'
          })
          console.log(err)
          })
        })
    }
  },
/////////DELETE PRODUCT FROM CART/////////
  delete: (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.session.user
    const db = req.app.get('db')
    db.delete([id, userId])
    .then(user => res.status(200).send(user))
    .catch(err => console.log(err))
  },

  deleteAllCart: (req, res, next) => {
    const { id: userId } = req.session.user
    const db = req.app.get('db')
    db.delete_all_cart([userId])
    .then(user => res.status(200).send(user))
    .catch(err => console.log(err))
  },

  ////////CART /////////
  getUserCart:(req, res, next) => {
    const {id} = req.session.user;
    req.app.get('db').cart([id])
    .then(cart => res.send(cart))
    .catch(err => console.log(err))
  },
  
  ///////USER UPDATE INFO////////
  userUpdate: (req, res, next) => {
    const db = req.app.get('db')
    const {id: userId} = req.session.user
    const {age, email, address} = req.params
    db.update_user([age, email, address, userId])
    .then( user => res.status(200).send(user[0]))
    .catch(err => {
      res.status(500).send({
        errorMessage: 'userNotFound'
      })
      console.log(err)
    })
  },

//Stripe Setup ////////////////////

    handlePayment: (req, res) => {
        const { amount, token:{id}} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "charge from Ruben"
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    }

}