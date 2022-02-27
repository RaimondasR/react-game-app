import React from 'react';
import { useSelector } from 'react-redux';

const StatsInArena = () => {
  const char = useSelector((state) => state.character.value.character);
  const weapon = useSelector((state) => state.character.value.weapon);  

  return (
    <div>      
      <h4>race : {char.race}</h4>
      <div>damage : {char.damage}</div>
      <div>health : {char.health}</div>
      <div>energy : {char.energy}</div>
      <div>stamina : {char.stamina}</div>
      <div>strength : {char.strength}</div>
      <div>inventory slots : {char.inventorySlots}</div>
      <div className="mb5">gold : {char.gold}</div>
      <div className="slot4Weapon">
        {weapon && <img src={weapon.image} alt=""/>}
      </div>    
    </div>
  )
}

export default StatsInArena;