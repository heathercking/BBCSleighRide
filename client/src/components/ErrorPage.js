import React from 'react';
import error_title from '../assets/images/page_naughty_list.svg'
import error_image from '../assets/images/404_page.svg';
import '../css/ErrorPage.css';

function ErrorPage() {
  return (
    <div className="main-container">
      <section className="error-title">
        <div className="error-header">
          <img className="error-image" src={error_title} alt="404" />
        </div>\
      </section>

      <div className="error-image-wrapper">
        <img className="error-image" src={error_image} alt="404" />
      </div>


    </div>
  )
}

export default ErrorPage
