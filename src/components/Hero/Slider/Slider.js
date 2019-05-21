import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(e) {
    this.props.updateRange(e.target.value);
  }

  render() {
    const { range } = this.props;
    return (
      <fieldset className='range__field'>
        <input className='range' type='range' min='0' max='10' value={range} onChange={this.updateRange}/>
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
      </fieldset>
    );
  }
}

export default Slider;