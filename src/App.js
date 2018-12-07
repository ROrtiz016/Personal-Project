import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserData } from './dux/users'
import axios from 'axios'
import './reset.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Electronics from './components/Category/Electronics/Electronics';
import Gadgets from './components/Category/Gadgets/Gadgets'
import Outdoors from './components/Category/Outdoors/Outdoors'
import Sea from './components/Category/Sea/Sea'
import Land from './components/Category/Land/Land'
import Riding from './components/Category/Riding/Riding'
import Selected from './components/Selected/Selected'
import Cart from './components/Cart/Cart'
import Account from './components/Account/Account'
import About from './components/About/About2'
import Contact from './components/Contact/Contact1'

class App extends Component {
  componentDidMount(){
    axios.get('/api/user-data')
    .then( user => this.props.getUserData(user.data))
    .catch( err => console.log(err))
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/Home' component={Home} />
          <Route path='/electronics' component={Electronics} />
          <Route path='/gadgets' component={Gadgets} />
          <Route path='/outdoors' component={Outdoors} />
          <Route path='/sea' component={Sea} />
          <Route path='/land' component={Land} />
          <Route path='/riding' component={Riding} />
          <Route path='/selectproduct/:id' component={Selected} />
          <Route path='/cart' component={Cart} />
          <Route path='/account' component={Account}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          
        </Switch>
      </HashRouter>
    );
  }
}

export default connect(null, {getUserData})(App);
