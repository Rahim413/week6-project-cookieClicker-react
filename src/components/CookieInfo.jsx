import React from 'react';
import './CookieInfo.css';

export default function CookieInfo({ cookies, cookiesPerClick }) {
  return (
    <div className="cookieInfo">
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Click: {cookiesPerClick}</p>
    </div>
  );
}
