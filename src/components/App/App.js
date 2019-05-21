import React, { Component } from 'react';
import './App.css';
import Hero from '../Hero/Hero.js';
import FeatureContainer from '../Feature/FeatureContainer.js';
import Testimonial from '../Testimonial/Testimonial.js';
import CTABuy from '../CTA_Buy/CTA_Buy.js';
import Footer from '../Footer/Footer.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-container'>
        <Hero />
        <FeatureContainer />
        <Testimonial />
        <CTABuy />
        <Footer />
      </div>
    );
  }
}