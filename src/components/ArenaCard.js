import React from 'react';
import StatsInArena from './StatsInArena';

const ArenaCard = ({ player, item, gameState, healthProgress, energyProgress}) => {  

  const emptyTemplate = 
    <div className="arenaCard d-flex a-center">
      <h2>Find Enemy To Fight</h2>    
    </div>;
  
  const template = 
    <div className="arenaCard">
      <div clasName="d-flex">
        <img className="arenaImg" src={ item.image } alt="" />
      </div>        
      <div className="wrapper d-flex">
        <div className="progressHealth" style={{ width: healthProgress + "%" }} />    
      </div>
      { player &&
          <div className="wrapper d-flex">
            <div className="progressEnergy" style={{ width: energyProgress + "%" }} />    
          </div>
      }
      { player && <StatsInArena /> }

      { !player && 
        <div>
          <h4>Monster: {item.name}</h4>
          <div>Max Damage: {item.maxDamage}</div>
          <div>Health: {item.health}</div>
          <div>Max Items Drop: {item.maxItemsDrop}</div>
        </div>}
    </div>;

  return (
    <div>  
      { !player && gameState === 0 ? emptyTemplate : template }        
    </div>           
  );
};

export default ArenaCard;