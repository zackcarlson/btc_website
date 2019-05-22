import React from 'react';
import Header from '../../Hero/Header/Header.js';
import Paragraph from '../../Hero/Paragraph/Paragraph.js';
import './Testimony.css';

const Testimony = (props) => (
  <div className='testimony-card'>
    <div className='testimony-image-container'>
      <img src={props.image} className='testimony-image'/>
    </div>
    <div className='testimony-info-container'>
      <Header headerText={props.header} headerClass={'testimony-header'}/>
      <Paragraph
        paragraphText={'Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such.'}
        paragraphClass={'testimony-paragraph'}
      />
    </div>
  </div>
);

export default Testimony;