import React, { Component } from 'react'
import './Carousel.css'
import snowboarding from '../imgs/snowboarding.jpg'
import scuba from '../imgs/scuba.jpg'
import biking from '../imgs/biking.jpg'
import skate from '../imgs/skateboarding.png'
// import TBallena from '../../img/TiburonBallena1.jpeg'
// import Tortuga from '../../img/Tortuga1.jpeg'

class Carousel extends Component {

componentDidMount(){
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 2500); // Change image every 2 seconds
  }
}

  render() {
    return (
      <div>
        <div className='slideshow-container'>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={snowboarding} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={skate} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={scuba} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={biking} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>


        </div>

      </div>
    )
  }
}

export default Carousel;