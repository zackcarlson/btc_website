import React from 'react';
import Header from '../Hero/Header/Header.js';
import Paragraph from '../Hero/Paragraph/Paragraph.js';
import Testimony from '../Testimonial/Testimony/Testimony.js';
import './Testimonial.css';
const uuidv4 = require('uuid/v4');

const Testimonial = (props) => (
  <div className='testimonial-container'>
    
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

      <div className='secondary-testimonial-container'>
        { [
            {
              image: '../../../public/images/charles.png',
              header: 'Charlie Shrem'
            },
            {
              image: '../../../public/images/bentley.png',
              header: 'Bentley Bellinger'
            },
            {
              image: '../../../public/images/paul.png',
              header: 'Paul Dishkant'
            },
            {
              image: '../../../public/images/jesse.png',
              header: 'Jesse Lazenby'
            }
            
          ].map(testimony => (
            <Testimony key={uuidv4()} header={testimony.header} image={testimony.image}/>
          ))
        }
      </div>
  </div>
);

export default Testimonial;