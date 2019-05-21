import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <div className='footer-container'>
    <div className='container'>
      <div className='row align-items-center' id='feature-row'>
        <div className='col-sm-6'>
          <p className='copyright-text'>&copy; 2018 All rights reserved</p>
        </div>
        <div className='col-sm-6'>
          <div className='row'>
            <span className='col-xs-12'>
              <a className='terms' href='#'>Terms of use</a>
              <a className='privacy' href='#'>Privacy Policy</a> 
            </span> 
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;