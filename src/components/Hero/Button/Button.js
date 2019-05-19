import React from 'react';
import './Button.css';

const Button = (props) => (
  <span className='button-container'>
    <button className={'button-btn ' + props.btnClass || ''}>
      {props.btnText}
    </button>
  </span>
);

export default Button;