import React from 'react';
import {useSelector} from "react-redux";

const PlayerProfile = () => {
  const char = useSelector((state) => state.character.value.character);

  return (
    <div className="playerCard d-flex column txt-left fs12">
      <div>
        <img src={char.image} alt=''/>
      </div>
      <div><h4>race : {char.race}</h4></div>
      <div>damage : {char.damage}</div>
      <div>health : {char.health}</div>
      <div>energy : {char.energy}</div>
      <div>stamina : {char.stamina}</div>
      <div>strength : {char.strength}</div>
      <div>inventory slots : {char.inventorySlots}</div>
      <div>gold : {char.gold}</div>
    </div>
  );
};

export default PlayerProfile;