import React from 'react';
import './UpgradeList.css';

export default function UpgradeList({ upgrades, onPurchaseUpgrade }) {
  return (
    <div className="upgradeList">
      {upgrades.map((upgrade) => (
        <div key={upgrade.id}>
          <span>
            {upgrade.name} - Cost: {upgrade.cost} Cookies - Increase: +{upgrade.increase}
          </span>
          <button onClick={() => onPurchaseUpgrade(upgrade)}>Buy</button>
        </div>
      ))}
    </div>
  );
}
