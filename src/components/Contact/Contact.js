import React, { Component } from 'react';
import Modal from 'react-modal'
import ModalButton from './ModalButton'
import './Contact.css'

class Contact extends Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }))
  }

  render() {
    return (
      <div className='aboutCnt'>
        <ModalButton handleClick={this.toggleModal}>
          <h4 className='abtn'>Contact</h4>
        </ModalButton>
        <Modal
          className='about1'
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
          <h3 className='editInfo'>Fell free to contact Us</h3>
          <div>
            <h4 className='contactInfo'>Email: contact@BBT.com</h4>
            <h4 className='contactInfo'>Customer Service: 1-800-852-9458</h4>
            <h4 className='contactInfo'>Phone: 987-123-4567</h4>
            <h4 className='contactInfo'>Facebook: BigBoyToys</h4>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Contact;