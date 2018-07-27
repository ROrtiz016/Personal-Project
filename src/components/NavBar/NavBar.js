import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.logout = this.logout.bind(this);  
  }

  logout() {
    axios.post('/api/logout').then(() => {
      this.setState({ user: null });
    });
  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <nav className='nav2'>
          <h3 className='StoreName2'>BigBoysToys</h3>
          <Link to='/Home'><button className='nav-button2'>Home</button></Link>
          <Link to='/Cart'><button className='nav-button2'>Cart</button></Link>
          <Link to='/Account'><button className='nav-button2'>Account</button></Link>
          <a href={`${window.origin}/api/logout`}><button className='nav-button2' >Logout</button></a>
        </nav>
      </div>
    )
  }
}