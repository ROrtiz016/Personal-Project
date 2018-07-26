import React, { Component } from 'react';
import Modal from 'react-modal'
import ModalButton from './ModalButton'
import './PopUp.css'
import axios from 'axios'
import { connect } from 'react-redux';
import { updateUsername, updateAge, updateEmail, updateUser_Pic, updateAddress, getUserData } from '../../dux/users'

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      modalOpened: false,
      ageInput: this.props.user.user_age,
      emailInput: this.props.user.user_email,
      addressInput: this.props.user.user_address
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputs = this.handleInputs.bind(this);

  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }))
  }

  userInfoHandler() {
    const { ageInput:age, addressInput: address, emailInput:email } = this.state
    axios.put(`/api/account/userInfo/${age}/${email}/${address}/`)
    .then( user => this.props.getUserData(user.data))
  }

  handleInputs (e) {
    const {name, value} = e.target
    
    this.setState({
      [name]:value
    })
  }

  render() {
    const { ageInput, emailInput, addressInput } = this.state

    let age = <input type='' name='ageInput' onChange={this.handleInputs} placeholder='age...' className='input' value={ageInput}/>

    let email = <input type='' value={emailInput} name='emailInput' onChange={this.handleInputs} placeholder='email...' className='input'/>

    let address = <input type='' value={addressInput} name='addressInput' onChange={this.handleInputs} placeholder='address...' className='input'/>

    let user = this.props.user
    return (
      <div className='popCnt'>
        <ModalButton handleClick={this.toggleModal} className='Mbtn'>
          <h4 className='edit'>edit</h4>
        </ModalButton>
        <Modal
          className='popUp'
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
          <h4 className='editInfo'>Edit Info</h4>
          {email}
          {age}
          {address}
          <button onClick={() => this.userInfoHandler(age, email, address, user)} className='enterBtn'>Enter</button>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { updateUsername, updateAge, updateEmail, updateUser_Pic, updateAddress, getUserData })(PopUp);