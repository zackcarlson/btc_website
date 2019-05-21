import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className='navbar'>
    {/* <div className='navbar-brand'>Changelly</div> */}
    <ul className='navbar-menu'>
      <li className='navbar-item'>
        <span className='navbar-brand'>Changelly</span>
      </li>
      <li className='navbar-item'>
        <span className='sign-in-btn'>
          Sign in
        </span>
        <i className='fas fa-arrow-right'></i>
      </li>
    </ul>
  </nav>
);

export default Nav;