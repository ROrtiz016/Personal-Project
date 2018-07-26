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
        <nav className='nav'>
          <h3 className='StoreName'>BigBoysToys</h3>
          <Link to='/Cart'><button className='nav-button'>Cart</button></Link>
          <Link to='/Account'><button className='nav-button'>Account</button></Link>
          <a href={`${window.origin}/api/logout`}><button className='nav-button' >Logout</button></a>
        </nav>
      </div>
    )
  }
}