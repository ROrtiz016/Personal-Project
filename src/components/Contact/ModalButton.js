import React from 'react';
import './Contact';

const ModalButton = props => (
  <button onClick={props.handleClick}>
    {props.children}
  </button>);

export default ModalButton;