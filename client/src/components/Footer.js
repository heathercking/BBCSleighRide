import React from "react";
import '../css/Footer.css';
import footerLogo from '../assets/images/logo_footer.svg';

const Footer = () => {

    return (
        <div className="footer">
          <img className ="logo" src={footerLogo} alt="Logo" />
        </div>
    )
}

export default Footer;