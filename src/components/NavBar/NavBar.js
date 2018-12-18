import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      toggleAnimation: false
    };
    this.logout = this.logout.bind(this);
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  toggleAnimation() {
    this.setState({
      toggleAnimation: !this.state.toggleAnimation
    })
  }

  logout() {
    axios.post('/api/logout').then(() => {
      this.setState({ user: null });
    });
  }

  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    let redirectIUri = encodeURIComponent(`${window.origin}/auth/callback`)

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectIUri}&response_type=code`;
  }

  checkUserLog(){
    axios.get('/api/user-data').then(res => {
      let {FRONTEND_DOMAIN } = process.env
      if(res.data.id){
        console.log(res.data)
        return (
          window.location = `${FRONTEND_DOMAIN}/#/account`
        )
      }else{
        return(
          this.login()
        )
      }
    })
  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <div className={this.state.showNav ? 'show-nav mobile-nav' : 'mobile-nav'} >
          <nav className='nav2'>
            <h3 className='StoreName2'>BigBoysToys</h3>
            <div className='navButtons'>
              <Link to='/Home'><button className='nav-button2'>Home</button></Link>
              <Link to='/Cart'><button className='nav-button2'>Cart</button></Link>
              <h3 onClick={this.login} className='nav-button2'>Login</h3>
              <button className='nav-button2' onClick={this.checkUserLog}>Account</button>
              <a href={`${window.origin}/api/logout`}><button className='nav-button2' >Logout</button></a>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}