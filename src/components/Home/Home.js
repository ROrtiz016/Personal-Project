import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default class Home extends Component {

  render() {
    return (
      <div className='back'>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        <NavBar />
        <div className='Home'>

          <h1 className='text'>
            Explore our selection of sporting gear for any type environment.
              </h1>

          <div className='CatContainer'>
            <div className='buttonSize'>

              <div className='NameContainer'>
                <Link to='/Electronics' className='Link'><h2 className='CatgName'>Electronics</h2></Link>
              </div>

              <div className='NameContainer'>
                <Link to='/Gadgets' className='Link'><h2 className='CatgName'>Gadgets</h2></Link>
              </div>

              <div className='NameContainer'>
                <Link to='/Outdoors' className='Link'><h2 className='CatgName'>Outdoors</h2></Link>
              </div>

              <div className='NameContainer'>
                <Link to='/Sea' className='Link'><h2 className='CatgName'>Sea</h2></Link>
              </div>

              <div className='NameContainer'>
                <Link to='/Land' className='Link'><h2 className='CatgName'>Land</h2></Link>
              </div>

              <div className='NameContainer'>
                <Link to='/Riding' className='Link'><h2 className='CatgName'>Riding</h2></Link>
              </div>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}