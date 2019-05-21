import React, { Component } from 'react';
import './RangeSlider.css';

import Slider from 'react-rangeslider';

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: 0.05
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className='slider'>
        <Slider
          min={0.05}
          max={1.55}
          step={0.15}
          value={value}
          tooltip={false}
          onChange={this.handleChange}
        />
         <div className='timeline-wrapper'>
          <svg role='presentation' className='tick-container' width='100%' height='8' xmlns='http://www.w3.org/2000/svg'>
            <rect className='range__tick' x='0%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='10%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='20%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='30%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='40%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='50%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='60%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='70%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='80%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='90%' y='3' width='1' height='8'></rect>
            <rect className='range__tick' x='100%' y='3' width='1' height='8'></rect>
          </svg>
          <svg role='presentation' className='text-container' width='100%' height='14' xmlns='http://www.w3.org/2000/svg'>
            <text className='range__point' x='0%' y='14' textAnchor='middle'>0.05</text>
            <text className='range__point' x='10%' y='14' textAnchor='middle'>0.20</text>
            <text className='range__point' x='20%' y='14' textAnchor='middle'>0.35</text>
            <text className='range__point' x='30%' y='14' textAnchor='middle'>0.50</text>
            <text className='range__point' x='40%' y='14' textAnchor='middle'>0.65</text>
            <text className='range__point' x='50%' y='14' textAnchor='middle'>0.80</text>
            <text className='range__point' x='60%' y='14' textAnchor='middle'>0.95</text>
            <text className='range__point' x='70%' y='14' textAnchor='middle'>1.10</text>
            <text className='range__point' x='80%' y='14' textAnchor='middle'>1.25</text>
            <text className='range__point' x='90%' y='14' textAnchor='middle'>1.40</text>
            <text className='range__point' x='100%' y='14' textAnchor='middle'>1.55</text>
          </svg>
        </div>
      </div>
    );
  }
}

export default RangeSlider;