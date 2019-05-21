import React from 'react';
import Header from '../Hero/Header/Header.js';
import Paragraph from '../Hero/Paragraph/Paragraph.js';
import './Testimonial.css';

const Testimonial = (props) => (
  <div className='testimonial-container'>
    <div className='container'>
      <div className='intro-testimonial-container'>
        <img src={'../../../public/images/lock.svg'} className='intro-testimonial-container-lock-icon'/>
        <Header
          headerText={'Trusted by 2 million users'}
          headerClass={'intro-testimonial-header'}/>
        <Paragraph
          paragraphText={'We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations.'}
          paragraphClass={'intro-testimonial-paragraph'}
        />
      </div>
    </div>
  </div>
);

export default Testimonial;