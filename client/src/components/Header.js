import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../css/Header.css';

function Header() {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <div className="nav-bar">
      <div className="nav-flex">
        <img className ="logo" src={logo} alt="Logo" onClick={handleClick}/>
        <nav className="options">
          <ul>
            <div className="link">Blog</div>
            <div className="link">Santa</div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;