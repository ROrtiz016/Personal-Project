import React, {Component}from 'react'
import './Login.css'
// import About from '../About/About';
// import Contact from '../Contact/Contact'
// import Carousel from '../Carousel/Carousel'
import snowboard from '../imgs/snowboarding.jpg'
import '../../reset.css'
import { Link } from 'react-router-dom'

export default class Login extends Component{

  // function login() {
  //   let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
  //   let redirectIUri = encodeURIComponent(`${window.origin}/auth/callback`)

  //   window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectIUri}&response_type=code`;
  // }

  render(){

    return (
      <div>
      
      <img src={snowboard} alt="" className='background'/>

      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />

      <div className='Tittle'>
        <h1 className='Store'>Big Boys Toys</h1>
          <Link to='/Home' className='login'>Explore</Link>
      </div>

    </div>
  )
 }
}

