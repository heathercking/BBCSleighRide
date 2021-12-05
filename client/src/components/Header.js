import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }



  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" onClick={handleClick}/>

      <ul>

      </ul>
    </nav>
  )
}

export default Header;