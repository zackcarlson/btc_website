import React, { Component } from 'react';
import './App.css';
import Hero from '../Hero/Hero.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-container'>
        <Hero />
      </div>
    );
  }
}