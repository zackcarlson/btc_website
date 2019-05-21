import React from 'react';

const Header = (props) => (
  <span className='header-container'>
    <header className={'header-root ' + props.headerClass || ''} >
      {props.headerText}
    </header>
  </span>
);

export default Header;