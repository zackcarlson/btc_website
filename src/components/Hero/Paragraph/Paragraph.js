import React from 'react';
import './Paragraph.css';

const Paragraph = (props) => (
  <span className='paragraph-container'>
    <p className={'paragraph-root ' + props.paragraphClass || ''}>
      {props.paragraphText}
    </p>
  </span>
);

export default Paragraph;