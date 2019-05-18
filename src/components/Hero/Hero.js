import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import './Hero.css';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='hero-container'>
        <Nav/>
      </div>
    );
  }
}