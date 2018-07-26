import React from 'react';
import './PopUp.css';

const ModalButton = props => (
  <button onClick={props.handleClick} className='Mbtn'>
    {props.children}
  </button>);

export default ModalButton;