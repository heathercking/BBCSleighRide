import React from "react";
import '../css/Footer.css';
import footerLogo from '../assets/images/logo_footer.svg';

const Footer = () => {

    return (
        <div className="footer">
          <div className="footer-wrapper">
            <img className ="footer-logo" src={footerLogo} alt="Logo" />
          </div>
        </div>
    )
}

export default Footer;