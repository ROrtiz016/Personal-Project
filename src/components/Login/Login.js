import React from 'react'
import './Login.css'
import About from '../About/About';
import Contact from '../Contact/Contact'
import Carousel from '../Carousel/Carousel'
import '../../reset.css'

export default function Login() {

  function login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    let redirectIUri = encodeURIComponent(`${window.origin}/auth/callback`)

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectIUri}&response_type=code`;
  }

  return (
    <div>
      <Carousel/>
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      <nav className='nav4'>
        <About className='nav3' />
        <Contact className='nav3' />
      </nav>

      <div className='Tittle'>
        <h1 className='Store'>Big Boys Toys</h1>
          <button onClick={login} className='login'>Login</button>
      </div>

    </div>
  )
}

