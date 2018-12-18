import React, { Component } from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends Component {

  render() {
    return (
      <div>
        <div className='footer'>
          <div>
            <h2>COMPANY</h2>
            <Link to='/about' className='aboutContact'><p className='AbtCntct'>About</p></Link>
            <Link to='/contact' className='aboutContact'><p className='AbtCntct'>Contact</p></Link>
          </div>

          <div>
            <h2>FOLLOW US</h2>
            <img src="https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png" alt="twitter" className='social' />
            <img src="https://www.secondhelpings.org/wp-content/uploads/2017/07/social_facebook_second_helpings.png" alt="facebook" className='social' />
            <img src="https://vignette.wikia.nocookie.net/riverdalearchie/images/a/a5/Instagram_icon.png/revision/latest?cb=20170607174004" alt="instagram" className='social' />
          </div>

          <div>
            <h2>NEWS LETTER</h2>
            <p className='AbtCntct'>Sign in for the latest news, offers, and styles</p>
            <input type="text" placeholder='Your email' className='e-mail' />
            <button className='send'>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>

        </div>

        <div className='bottom'>
          <h3>2018 BIG BOYS TOYS ecommerce software</h3>

          <div>
            <img src="https://18f0uvkdanva8ka03usq5z6i-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/visa-logo.png" alt="VISA" className='payment'/>
            <img src="http://birdsrubberstamps.com/store/catalog/view/image/mc-gray.png" alt="MasterCard" className='payment'/>
            <img src="https://cdn4.iconfinder.com/data/icons/online-payment-methods-02/128/paypal_payment_methods_copy-512.png" alt="PayPal" className='payment'/>

            <img src="https://melbourne.tastefestivals.com/wp-content/uploads/2017/09/AMEX-Logo-Grey-Left.png" alt="AMEX" className='payment'/>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;