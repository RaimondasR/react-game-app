
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
      <h4>race : {char.race}</h4>
      <div>damage : {char.damage}</div>
      <div>health : {char.health}</div>
      <div>energy : {char.energy}</div>
      <div>stamina : {char.stamina}</div>
      <div>strength : {char.strength}</div>
      <div>inventory slots : {char.inventorySlots}</div>
      <div className="mb5">gold : {char.gold}</div>
      <h4>Slot for Weapon</h4>
      <div className="slot4Weapon" onClick={disarm}>
        {weapon && <img src={weapon.image} alt=""/>}
      </div>  
    </div>
  );
};

export default PlayerInfo;