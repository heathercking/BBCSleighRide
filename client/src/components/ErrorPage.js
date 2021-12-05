import React from 'react';
import sleigh from '../images/sleigh.svg';

function ErrorPage() {
  return (
    <div className="main-container">
      <img src={sleigh} alt="Logo" />

      <section className="title">
        <h3>This page is on the naughty list!</h3>
      </section>
    </div>
  )
}

export default ErrorPage
