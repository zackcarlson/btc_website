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
        <h1>App Component</h1>
        <Hero />
      </div>
    );
  }
}