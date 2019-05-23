import React, { Component } from 'react';
import RangeSlider from '../RangeSlider/RangeSlider.js';
import Button from '../Button/Button.js';
import Conversion from '../Conversion/Conversion.js';
import { btcConversion } from '../../../helpers/btcConversion.js';
import './Buy.css';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      bitcoinVal: '0.01',
      currencyVal: '$78',
      currencies: [
        {
          title: 'USD',
          icon: 'flag-icon flag-icon-us'
        },
        {
          title: 'JPY',
          icon: 'flag-icon flag-icon-jp'
        },
        {
          title: 'GBP',
          icon: 'flag-icon flag-icon-gb'
        },
        {
          title: 'AUD',
          icon: 'flag-icon flag-icon-au'
        },
        {
          title: 'CAD',
          icon: 'flag-icon flag-icon-ca'
        },
        {
          title: 'CNY',
          icon: 'flag-icon flag-icon-cn'
        }
      ],
      bitCurrency: [
        {
          title: 'BTC',
          btcIcon: <img src={'../../../../public/images/btc.svg'} className='btc-svg'/>
        }
      ]
    };
    this.handleConversion  = this.handleConversion.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
  }

  handleConversion(bitcoinVal) {
    const { currency } = this.state;
    let currencyVal = btcConversion[currency][bitcoinVal];
    this.setState({
      bitcoinVal,
      currencyVal
    });
  }

  handleCurrency(currency) {
    this.setState({
      currency
    }, () => this.handleConversion(this.state.bitcoinVal));
  }

  render() {
    const { currencyVal, bitcoinVal } = this.state;
    return (
      <span className='buy-container'>
        <div className='buy-root'>
          <RangeSlider onConversion={this.handleConversion}/>
          <Conversion onCurrencyChange={this.handleCurrency} amount={currencyVal} list={this.state.currencies} title={'USD'} icon={'flag-icon flag-icon-us'}/>
          <Conversion amount={bitcoinVal} list={this.state.bitCurrency} title={'BTC'} btcIcon={this.state.bitCurrency[0].btcIcon}/>
          <Button btnClass={'buy-container-btn'} btnText={'Continue'}/>
        </div>
      </span>
    );
  }
}

export default Buy;