import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './About.css'

class About extends Component{

  render(){
    return(
      <div>
        <NavBar/>

        <div className='aboutCont'>

        <h2 className='tittleAbout'>About</h2>

        <h4 className='aboutText'>Big Boy Toys is a E-commerce app dedicated to find all the new fun stuff that big guys are looking for such as the latests Toys for outdoors, electronics, gadgets and more. Login, take a look, order, and have fun!</h4>

        </div>

        <Footer/>
      </div>
    )
  }
}

export default About;