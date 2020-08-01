import React from 'react';
import { Link } from 'react-router-dom';
import '../../base.css';
import './Header.css';

const Header = () => {
  return (
      <div className="Header">
        <div className="Header-wrapper container">
          <Link to="/"><h1>Bibek's Time Converter</h1></Link>
          <Link to="/about"><h3>About Me</h3></Link>
        </div>
      </div>
  )
};

export default Header;