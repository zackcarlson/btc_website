import React from 'react';
import Header from '../../components/Hero/Header/Header.js';
import Button from '../../components/Hero/Button/Button.js';
import './CTA_Buy.css';

const CTABuy = () => (
  <div className='cta-buy-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <Header headerText={'Buy Bitcoin with credit card'} headerClass={'buy-bitcoin'}/>
          <Header headerText={'In just a few easy steps'} headerClass={'easy-steps'}/>
        </div>
        <div className='col-sm-6'>
          <div className='row'>
            <div className='col-xs-12' id='cta-buy-btn-container'>
              <Button btnText={'Create Logo Button'} btnClass={'create-logo-btn'}/>
              <Button btnText={'Buy Now'} btnClass={'buy-now-btn'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTABuy;