import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div>
            <a href="/" className="brand-logo">
              Samuel V Meyer
          </a>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;