import React from 'react';
import Slider from '../Slider/Slider.js';
import './Buy.css';

const Buy = (props) => (
  <span className='buy-container'>
    <div className='buy-root'>
      <Slider range={props.rangeVal} updateRange={props.updateRange}/>
      <span></span>
    </div>
  </span>
);

export default Buy;