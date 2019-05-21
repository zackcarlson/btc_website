import React from 'react';
import Header from '../../Hero/Header/Header.js';
import Paragraph from '../../Hero/Paragraph/Paragraph.js';
import Button from '../../Hero/Button/Button.js';
import './Feature.css';

const Feature = (props) => (
  <div className={'col-sm-6' + ' feature-' + props.uniqId} id='feature-card'>
    <img src={props.icon}/>
    <Header headerText={props.headerText} headerClass={'feature-header'}/>
    <Paragraph
      paragraphText={props.paragraphText}
      paragraphClass={'feature-paragraph'}
    />
    <Button btnClass={'feature-btn'} btnText={props.btnText}/>
    <i className='fas fa-arrow-right' id='arrow-right'></i>
  </div>
);

export default Feature;