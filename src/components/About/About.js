import React, { Component } from 'react';
import Modal from 'react-modal'
import ModalButton from './ModalButton'
import './About.css'
// import axios from 'axios'

class About extends Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }))
  }

  // userInfoHandler(){
  //   axios.post('/api/account/userInfo/')
  // }

  render() {
    return (
      <div className='aboutCnt'>
        <ModalButton handleClick={this.toggleModal}>
          <h4 className='abtn'>About</h4>
        </ModalButton>
        <Modal
          className='about'
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
            <h3 className='editInfo'>About Us</h3>
            <h4 className='aboutText'>Big Boy Toys is a E-commerce app dedicated to find all the new fun stuff that big guys are looking for such as the latests Toys for outdoors, electronics, gadgets and more. Login, take a look, order, and have fun! </h4>
        </Modal>
      </div>
    )
  }
}

export default About;