import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/Header.css';

function Header() {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <nav className="nav-bar">
      <img className ="logo" src={logo} alt="Logo" onClick={handleClick}/>

      <ul>
        <li>Blog</li>
        <li>Santa</li>
      </ul>
    </nav>
  )
}

export default Header;