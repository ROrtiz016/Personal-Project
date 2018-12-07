import React, { Component } from 'react'
import axios from 'axios'
import './Gadgets.css'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'

export default class Gadgets extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    axios.get('/api/gadgets').then(res => {
      this.setState({ products: res.data })
    })

  }

  render() {
    console.log(11111111, this.state.products)
    let gadgets = this.state.products.map((el) => {
      return (
        <div key={el.product_id} className='Boxes'>
          <div className='imgbox'>
            <Link to={`/selectproduct/${el.product_id}`}><img className='pImg' src={el.product_img} alt='Product' /></Link>
          </div>

          <div className='ProductBox'>
            <h3 className='pName'>{el.product_name}</h3>
            <p className='pPrice'>${el.product_price}.00</p>
          </div>

        </div>
      )
    })
    return (
      <div>
        <div className='ProdcAppGad'>
          <NavBar />
          <h1 className='CatName'>Gadgets</h1>
          <div className='Products'>{gadgets}</div>
        </div>
          <Footer />
      </div>
    )
  }
}