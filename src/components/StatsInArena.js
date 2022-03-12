import React from 'react';
import { useSelector } from 'react-redux';

const StatsInArena = () => {
  const char = useSelector((state) => state.character.value.character);
  const weapon = useSelector((state) => state.character.value.weapon);  

  return (
    <div>      
      <h4>Player : { char.race }</h4>
      <div>Damage : { char.damage }</div>
      <div>Health : { char.health }</div>
      <div>Energy : { char.energy }</div>
      <div>Stamina : { char.stamina }</div>
      <div>Strength : { char.strength }</div>
      <div>Inventory slots : { char.inventorySlots }</div>
      <div className="mb5">gold : { char.gold }</div>
      <div className="slot4Weapon">
        { weapon && <img src={ weapon.image } alt=""/> }
      </div>    
    </div>
  )
}

export default StatsInArena;
