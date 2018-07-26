const imposter = {
  id: 1,
  auth_id: 'google-oauth2|117747537500611246875',
  user_name: 'Ruben Ortiz',	
  user_pic: 'https://lh3.googleusercontent.com/-JQxciwpnzGY/AAAAAAAAAAI/AAAAAAAAEjg/I9uBebcGeRE/photo.jpg',	
  user_age: 28,	
  user_email: 'rortiz.max@gmail.com',
  user_address: '1234 W 567 S, Pleasant Groves, Utah'
}

module.exports = {
  bypassAuthInDevelopment: (req, res, next) => {
    if(!req.session.user && process.env.NODE_ENV === 'development') {
      req.session.user = imposter
    }
    next()
  }
}