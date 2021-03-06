import React, { Component } from 'react';
import Modal from 'react-modal'
import ModalButton from './ModalButton'
import './Review.css'
import axios from 'axios'

class About extends Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }))
  }

  userInfoHandler(){
    axios.post('/account/userInfo/')
  }

  render() {
    return (
      <div>
        <ModalButton handleClick={this.toggleModal}>
          <h4 className='revbtn'>review</h4>
        </ModalButton>
        <Modal
          className='about'
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
        </Modal>
      </div>
    )
  }
}

export default About;