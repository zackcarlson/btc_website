import React from 'react';
import './Details.css';

const Details = (props) => (
  <div className='details-container'>
    <span className='three-dots-container'>
      <div className='grey-dot'></div>
      <div className='green-dot'></div>
      <div className='grey-dot'></div>
    </span>
    <span className='detail-panel-container'>
      For  
        <span className='detail-panel-currency'>
         {props.currencyVal} {props.currency}
        </span>
      you will get 
        <span className='detail-panel-currency'>
         {props.bitcoinVal} Bitcoin
        </span>
    </span>
  </div>
);

export default Details;