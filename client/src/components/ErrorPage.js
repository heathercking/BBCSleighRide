import React from 'react';
import error_image from '../assets/images/404_page.svg';

function ErrorPage() {
  return (
    <div className="main-container">
      <img src={error_image} alt="404" />

      <section className="title">
        <h3>This page is on the naughty list!</h3>
      </section>
    </div>
  )
}

export default ErrorPage
