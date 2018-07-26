import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default class Home extends Component {

  render() {
    return (
      <div className='Home'>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <div>
          <NavBar />
          <div className='shadow'>
            <div className='buttonSize'>
              <Link to='/Electronics' className='Link'><h2>Electronics</h2></Link>
              <Link to='/Gadgets' className='Link'><h2>Gadgets</h2></Link>
              <Link to='/Outdoors' className='Link'><h2>Outdoors</h2></Link>
              <Link to='/Sea' className='Link'><h2>Sea</h2></Link>
              <Link to='/Land' className='Link'><h2>Land</h2></Link>    
              <Link to='/Riding' className='Link'><h2>Riding</h2></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}