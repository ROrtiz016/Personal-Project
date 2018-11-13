import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './dux/store'
import '../node_modules/font-awesome/css/font-awesome.min.css'


ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>
  , document.getElementById('root'));
