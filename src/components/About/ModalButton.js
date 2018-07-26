import React from 'react';
import './About.css';

const ModalButton = props => (
  <button onClick={props.handleClick}>
    {props.children}
  </button>);

export default ModalButton;