import React from 'react';
import {useSelector} from 'react-redux';

const MonstersList = () => {

  const state = useSelector((state) => state.monsters.value);
 
  return (
    <div className ="d-flex row center f-wrap">      
      {state.map((x, i) => (        
          <div className="Monster d-flex column" key={i}>
            <div className="Image">
              <img src={x.image} alt=''/> 
            </div>  
            <div className="Info d-flex column txt-left">
              <div>name : {x.name}</div>
              <div>maxDamage : {x.maxDamage}</div> 
              <div>health : {x.health}</div> 
              <div>maxItemsDrop : {x.maxItemsDrop}</div>              
            </div>                            
          </div>
        
      ))};      
    </div>
  );
};

export default MonstersList;