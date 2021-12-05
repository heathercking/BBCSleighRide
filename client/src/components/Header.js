import React from "react";
import {withRouter} from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" />

      <ul>

      </ul>
    </nav>
  )
}

export default Header;