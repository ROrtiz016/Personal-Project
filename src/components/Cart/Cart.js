import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import NavBar from '../NavBar/NavBar'
import { addToCart, removeFromCart } from '../../dux/cartReducer'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import Notifications, { notify } from 'react-notify-toast';

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
    }
  }

  createListItems() {
    return this.props.cart.map(
      (cart) => {
        return (
          <div>
            <li key={cart.product_id}>
              <img src={cart.product_img} className='imgStyle' alt='prdctPic' />
              {cart.product_name}${this.productPrice(cart.product_price, cart.quantity)}.00
        <button onClick={() => this.delete(cart.id, cart.user_id)}>Remove</button>
            </li>
            <p>Quantity</p>
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


  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('/api/payment', { token }).then(response => {
      response.json().then(token=>
        alert(`we are in business, ${token.email}`))
      });
    }
    
  onClosed = () => {
    axios.delete('/api/delcart')
    .then(response => {this.props.removeFromCart(response.data)} )
    .then(notify.show('Awesomeness is on it\'s way!', 'success', 2500))
    .catch(err => console.log(err))
  } 

  render() {
    return (
      <div className='CompCart'>
        <NavBar />
        <div>
        <Notifications />
          <h2 className='amount'>Total:{this.calculateTotal()}</h2>
          <StripeCheckout
            data-image='https://stripe.com/img/documentation/checkout/marketplace.png'
            stripeKey='pk_test_ZIysRjRPimXpOT1x4NVoRugH'
            token={this.onToken}
            amount={this.total * 100}
            currency="USD"
            closed={this.onClosed}
          />
          <ul>
            {this.createListItems()}
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart)