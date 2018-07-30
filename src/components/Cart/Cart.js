import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import NavBar from '../NavBar/NavBar'
import { addToCart, removeFromCart } from '../../dux/cartReducer'
import { getUserData } from '../../dux/users'
import axios from 'axios'
import Notifications, { notify } from 'react-notify-toast';
import StripeCheckout from 'react-stripe-checkout'

class Cart extends Component {

  updateQuantity(value, id) {
    axios.post(`/api/addcart/${id}`, {
      quantity: value
    }).then(response => this.props.addToCart(response.data))
      .catch(err => console.log(err))
  }

  delete(id, user) {
    axios.delete(`/api/cart/${id}/${user}`)
      .then(response => { this.props.removeFromCart(response.data) })
      .catch(err => console.log(err))
  }

  productPrice(price, qty) {
    return price * qty
  }

  componentDidMount() {
    if (this.props.cart.length === 0) {
      axios.get('/api/cart').then(res => this.props.addToCart(res.data))
        .catch(err => console.log(err))
      axios.get('/api/user-data').then(res => {
        this.props.getUserData(res.data)
        console.log(res.data)
      })
    }
  }

  createListItems() {
    return this.props.cart.map(
      (cart) => {
        return (
          <div className='ListBoxs'>
            <li key={Math.random()}>
              <img src={cart.product_img} className='imgStyle' alt='prdctPic' />
              {cart.product_name} <br /> Price ${this.productPrice(cart.product_price, cart.quantity)}.00
        <button onClick={() => this.delete(cart.id, cart.user_id)} className='remv'>Remove</button>
              <p className='qntty'>Quantity</p>
              <select defaultValue={cart.quantity} onChange={(e) => this.updateQuantity(e.target.value, cart.product_id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
          </div>
        )
      }
    )
  }

  calculateTotal() {
    let tempTotal = 0;
    tempTotal = this.props.cart.reduce((acc, el) => {
      return acc + (el.product_price * el.quantity)
    }, 0)
    this.total = +(tempTotal).toFixed(2);
    return this.total;
  }

  amount() {
    return this.total * 100

  }

  onToken = (token) => {
    token.card = void 0;
    axios.post('/api/payment', { token, amount: this.amount() }).then(response => { console.log(response) }
    )
  }

  onClosed = () => {
    axios.delete('/api/delcart')
      .then(response => { this.props.removeFromCart(response.data) })
      .then(notify.show('Awesomeness is on it\'s way!', 'success', 2500))
      .catch(err => console.log(err))
  }

  userInfoDisplay = () => {
    let { user } = this.props
    return (
      <div className='usersDisplay'>
        <img src={user.user_pic} alt="" className='userPic' />
        <h3 className='AccntInfo2'>User:{user.user_name}</h3>
        <p className='AccntInfo2'>Address: {user.user_address}</p>
      </div>
    )
  }

  render() {
    return (
      <div className='CompCart'>
        <NavBar />
        <Notifications />
        <div className='amnts'>
          <h1 className='amount'>Total:{this.calculateTotal()}</h1>
          <div className='paybtn'>
            <StripeCheckout
              name="Big Boys Toys inc."
              description="We are in Business"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrglTr3WvfermEfjoYweYpTvv7CGUfLal9dyj5cj2TPfAkaTEP"
              token={this.onToken}
              stripeKey={'pk_test_ZIysRjRPimXpOT1x4NVoRugH'}
              amount={this.amount()}
              closed={this.onClosed}
            />
          </div>
          <ul className='List'>
            {this.createListItems()}
          </ul>
        </div>
        <div className='userinfo2'>
          <h1 className='Send'>Send to...</h1>
          {this.userInfoDisplay()}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    user: state.users.user
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, getUserData })(Cart)