import React from 'react';
import RangeSlider from '../RangeSlider/RangeSlider.js';
import Button from '../Button/Button.js';
import './Buy.css';

const Buy = (props) => (
  <span className='buy-container'>
    <div className='buy-root'>
      <RangeSlider />
      <Button btnClass={'buy-container-btn'} btnText={'Continue'}/>
      <span></span>
    </div>
  </span>
);

export default Buy;