import React from 'react';
import './Slider.css';

const Slider = (props) => (
  <span className='slider-container'>
    <input type='range' min='0.01' max='1.15' value='50' className='slider' id='range'/>
  </span>
);

export default Slider;