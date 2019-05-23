import React from 'react';
import Button from '../Button/Button.js';
import AlertBox from '../Alert/Alert.js';
import Header from '../Header/Header.js';
import Paragraph from '../Paragraph/Paragraph.js';
import Buy from '../Buy/Buy.js';
import './GetStarted.css';

const GetStarted = (props) => (
  <div className='getstarted-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='getstarted-info-container'>
            <AlertBox />
            <Header headerText={'Buy Bitcoin with Credit Card'}/>
            <Paragraph paragraphText={
              `Catch mouse and gave it as a present chew the plant 
              but scratch me there, elevator butt. Always ensure to lay down in 
              such a manner that tail can lightly brush.`}
              paragraphClass={'getStarted-p'}
            />
            <Button btnText={'Create Account'} btnClass={'getStarted-btn'}/>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='getstarted-buy-container'>
            <Buy />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GetStarted;