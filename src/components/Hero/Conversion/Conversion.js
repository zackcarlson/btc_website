import React from 'react';
import Dropdown  from '../Dropdown/Dropdown.js';
import './Conversion.css';

const Conversion = (props) => (
  <div className='conversion-card'>
    <h3 className='conversion-amount'>
      {props.amount}
    </h3>
    <Dropdown 
      list={props.list}
      title={props.title}
      icon={props.icon}
      btcIcon={props.btcIcon}
      onCurrencyChange={props.onCurrencyChange}
    />
  </div>
);

export default Conversion;