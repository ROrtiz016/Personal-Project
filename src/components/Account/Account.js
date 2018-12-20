import React, { Component } from 'react'
import './Account.css'
import { connect } from 'react-redux';
import axios from 'axios'
import { updateUsername, updateAge, updateEmail, updateUser_Pic, updateAddress, getUserData } from '../../dux/users'
import NavBar from '../NavBar/NavBar';
import PopUp from '../Modal/PopUp'


class Account extends Component {

  componentDidMount() {
    axios.get('/api/user-data').then(res => {
      this.props.getUserData(res.data)
    })
  }

  render() {
    let { user } = this.props
    return (
      <div className='backimg'>
        <div>
          <NavBar />
        </div>

        <div className='InfoBox'>
          <div className='sections'>
            <p className='AccntInfo01'>My Account</p>
            <div className='picContnr'>
              <p className='pleaseLog'>Please Login to display your account information</p>
              <img src={user.user_pic} className='userPic' />
            </div>
            <div className='info'>
              <h4 className='AccntInfo2'>User: {user.user_name}</h4>
              <p className='AccntInfo2'>email: {user.user_email}</p>
              <p className='AccntInfo2'>age: {user.user_age}</p>
              <p className='AccntInfo2'>address: {user.user_address}</p>
              <PopUp />
            </div>
          </div>

          <div className='Orders'>
            <p className='AccntInfo01'>Order History</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { updateUsername, updateAge, updateEmail, updateUser_Pic, updateAddress, getUserData })(Account)