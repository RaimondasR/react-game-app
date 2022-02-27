import React from 'react';
import StatsInArena from './StatsInArena';

const ArenaCard = ({player, item}) => {  

  return (
    <div className="arenaCard">
      <div clasName="d-flex">
         <img src={item.image} alt="" />
      </div>        
      <div className="wrapper d-flex">
        <div className="progressHealth" />    
      </div>
      { player &&
        <div className="wrapper d-flex">
          <div className="progressEnergy" />    
        </div>
       }
       <StatsInArena />
    </div>
  )
}

export default ArenaCard;