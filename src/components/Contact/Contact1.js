import React, {Component} from 'react'
import './Contact.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

class Contact extends Component{

  render(){
    return(
      <div>
        <NavBar/>

        <div className='contactCont'>
        <h1 className='tittleContact'>Contact</h1>

        <h3 className='editInfo1'>Fell free to contact Us</h3>
          
            <h4 className='contactInfo'>Email: contact@BBT.com</h4>
            <h4 className='contactInfo'>Customer Service: 787-538-5781</h4>
            <h4 className='contactInfo'>Phone: 987-123-4567</h4>
            <h4 className='contactInfo'>Facebook: BigBoyToys</h4>
          
        </div>

        <Footer/>
      </div>
    )
  }
}

export default Contact