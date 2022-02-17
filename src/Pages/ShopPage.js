import React from 'react';
import Shop from '../components/Shop';
import PlayerInventory from '../components/PlayerInventory';

const ShopPage = () => {
  return (
    <div className="ShopPage d-flex column">  
      <div><h3 className="m10">SHOP Page</h3></div>
      <div className="d-flex row space-arnd">    
        <div className="shop-div d-flex grow1 ml10 mr10">
          <Shop />
        </div>
        <div className="pl-inv-div d-flex grow1 mr10">
          <PlayerInventory />
        </div>
      </div> 
    </div>
  );
};

export default ShopPage;
