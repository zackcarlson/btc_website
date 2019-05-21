import React, { Component } from 'react';
import Nav from './Nav/Nav.js';
import GetStarted from './GetStarted/GetStarted.js';
import './Hero.css';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0.05
    };
    this.updateRange = this.updateRange.bind(this);
  }

  updateRange(val, e) {
    this.setState({
      rangeVal: val
    });
  } 

  render() {
    const { rangeVal } = this.state;
    return (
      <div className='hero-container'>
        <Nav/>
        <GetStarted range={rangeVal} updateRange={this.updateRange}/>
      </div>
    );
  }
}