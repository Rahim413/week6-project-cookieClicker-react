import React from 'react';
import './Cookie.css';

export default function Cookie({ onClick }) {
  return (
    <div className="cookieImageContainer">
      <img
        id="cookieImage"
        src="./public/cookie-image.png"
        alt="cookie"
        onClick={onClick}
      />
    </div>
  );
}
