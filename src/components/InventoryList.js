import React from 'react';
import { useSelector } from 'react-redux';

const InventoryList = () => {
  const state = useSelector((state) => state.inventory.value);


  return (
    <div className ="d-flex row evenly f-wrap">      
      {state.map((x, i) => (        
          <div className="Inventory d-flex column" key={i}>
            <div className="Image">
              <img src={x.image} alt=''/> 
            </div>  
            <div className="Info d-flex column txt-left">
              <div>maxDamage : {x.maxDamage}</div> 
              <div>price : {x.price}</div> 
              <div>energyPerHit : {x.energyPerHit}</div>              
            </div>                            
          </div>
        
      ))};      
    </div>
  );
};

export default InventoryList;
