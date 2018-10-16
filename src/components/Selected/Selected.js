import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addToCart } from '../../dux/cartReducer'
import NavBar from '../NavBar/NavBar'
import './Selected.css'
import Notifications, { notify } from 'react-notify-toast';
// import Review from '../Review/Review'


class Selected extends Component {
  constructor() {
    super()
    this.state = {
      product: {},
    }
  }


  componentDidMount() {
    axios.get(`/api/selectproduct/${this.props.match.params.id}`).then(res => {
           this.setState({ product: res.data[0] })

    })
  }

  addToCartHandler = () => {
    axios.post('/api/addcart/' + this.state.product.product_id).then(response => {
      console.log(response.data)
      this.props.addToCart(response.data)
      notify.show('Awesome!', 'success', 2500);

    })
  }


  render() {

    return (

      <div className='Selback'>
        <NavBar />
        <div>
          <div>
            <Notifications />
          </div>
          <div className='SelectDiv'>
            <img className='SelImg' src={this.state.product.product_img} alt='Product' />
            <h3 className='SelProdName'>{this.state.product.product_name}</h3>
            <p className='SelPrice'>Price ${this.state.product.product_price}.00</p>
            <p className='descrptn'>{this.state.product.product_description}</p>

          </div>
          <button onClick={() => { this.addToCartHandler() }} className='addToCart'>Add to Cart</button>
        </div>
        {/* <h3 className='reviews'>Customer Reviews:</h3>
        <h4 className='givreviw'>Give us your <Review/></h4> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps, { addToCart })(Selected)