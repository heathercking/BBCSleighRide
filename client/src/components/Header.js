import React from "react";
import {useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo_star.svg';
import santa from '../assets/images/santa_happy.svg';
import '../css/Header.css';


function Header({showSanta}) {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  const handleSantaClick = () => {
    showSanta()
  }

  return (
    <>
    <div className="nav-bar">
      <div className="nav-flex">
        <img className ="logo" src={logo} alt="Logo" onClick={handleClick}/>
        <nav className="options">
          <ul>
            <img className ="santa-happy" src={santa} alt="Logo" onClick={handleSantaClick}/>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Header;