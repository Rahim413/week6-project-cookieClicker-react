import React, { useState, useEffect } from 'react';
import Cookie from './components/Cookie';
import CookieInfo from './components/CookieInfo';
import UpgradeList from './components/UpgradeList';
import './App.css';

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerClick, setCookiesPerClick] = useState(1);
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    const fetchUpgrades = async () => {
      const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades');
      const data = await response.json();
      setUpgrades(data);
    };
    fetchUpgrades();
  }, []);

  const handleCookieClick = () => {
    setCookies(cookies + cookiesPerClick);
  };

  const handlePurchaseUpgrade = (upgrade) => {
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost); 
      setCookiesPerClick(cookiesPerClick + upgrade.increase); 
    } else {
      alert('You don’t have enough cookies for this upgrade!');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((prevCookies) => prevCookies + cookiesPerClick);
    }, 1000);

    return () => clearInterval(interval); 
  }, [cookiesPerClick]);

  return (
    <div className="appContainer">
      <h1>Cookie Clicker</h1>
      <Cookie onClick={handleCookieClick} />
      <CookieInfo cookies={cookies} cookiesPerClick={cookiesPerClick} />
      <UpgradeList upgrades={upgrades} onPurchaseUpgrade={handlePurchaseUpgrade} />
    </div>
  );
}
