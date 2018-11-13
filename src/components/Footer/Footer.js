import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
        <div className='footer'>
          <div>
            <h2>COMPANY</h2>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div>
            <h2>FOLLOW US</h2>
            <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt="twitter" className='social' />
            <img src="https://www.secondhelpings.org/wp-content/uploads/2017/07/social_facebook_second_helpings.png" alt="facebook" className='social' />
            <img src="https://vignette.wikia.nocookie.net/riverdalearchie/images/a/a5/Instagram_icon.png/revision/latest?cb=20170607174004" alt="instagram" className='social' />
          </div>

          <div>
            <h2>NEWS LETTER</h2>
            <p>Sign in for the latest news, offers, and styles</p>
            <input type="text" placeholder='Your email' className='e-mail' />
            <button className='send'>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>

        </div>

        <div className='bottom'>
          <h3>2018 BIG BOYS TOYS ecommerce software</h3>
          <h3></h3>

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