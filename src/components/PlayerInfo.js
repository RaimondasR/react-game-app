
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { disarmWeapon } from '../features/characters';

const PlayerInfo = () => {
  const dispatch =useDispatch();
  const char = useSelector((state) => state.character.value.character);
  const weapon = useSelector((state) => state.character.value.weapon);

  function disarm() {
    if (weapon) dispatch(disarmWeapon());        
  }

  return (
    <div className="playerInfo d-flex grow1 column txt-left">
      <h3>Player Info</h3>
      <div>
        <img src={char.image} alt=''/>
      </div>
      <h4>Player : {char.race}</h4>
      <div>Damage : {char.damage}</div>
      <div>Health : {char.health}</div>
      <div>Energy : {char.energy}</div>
      <div>Stamina : {char.stamina}</div>
      <div>Strength : {char.strength}</div>
      <div>Inventory slots : {char.inventorySlots}</div>
      <div className="mb5">gold : {char.gold}</div>
      <h4>Slot for Weapon</h4>
      <div className="slot4Weapon" onClick={disarm}>
        {weapon && <img className="m0" src={weapon.image} alt=""/>}
      </div>  
    </div>
  );
};

export default PlayerInfo;