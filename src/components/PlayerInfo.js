import React from 'react';
import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const char = useSelector((state) => state.character.value.character);
  const weapon = useSelector((state) => state.character.value.weapon);

  return (
    <div className="playerInfo d-flex grow1 column txt-left fs12">
      <div><h3>Player Info</h3></div>
      <div>
        <img src={char.image} alt=''/>
      </div>
      <div><h3>race : {char.race}</h3></div>
      <div>damage : {char.damage}</div>
      <div>health : {char.health}</div>
      <div>energy : {char.energy}</div>
      <div>stamina : {char.stamina}</div>
      <div>strength : {char.strength}</div>
      <div>inventory slots : {char.inventorySlots}</div>
      <div>gold : {char.gold}</div>
      <h4>Slot for Weapon</h4>
      <div className="slot4Weapon">
        {weapon && <img src={weapon.image} alt=""/>}
      </div>  
    </div>
  );
};

export default PlayerInfo;