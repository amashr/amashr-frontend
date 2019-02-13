import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import './Header.scss';

const Header = () => (
  <div className="Header">
    <div className="Header__brand">
      <Link to="/">AMAS HR</Link>
    </div>
    <nav className="Header__nav">
      <Link to="/platform">Our Platform</Link>
      <Link to="/about">Why AMAS HR</Link>
      <Link to="/packages">Packages</Link>
      <Link to="/services">Services</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/signin">Sign In</Link>
      <Button path="#" desc="Get Started" cssClass="Btn" />
    </nav>
  </div>
);

export default Header;
