import React from 'react';

const Character = (props) => {
  return (
    <div className="Character d-flex column">
      <div className="">
        <img className="Image" src={props.image} alt="image" /> 
      </div>  
      <div className="Info d-flex column txt-left">
        <div>race : {props.race}</div>
        <div>damage : {props.damage}</div> 
        <div>health : {props.health}</div> 
        <div>energy : {props.energy}</div>
        <div>stamina : {props.stamina}</div> 
        <div>strength : {props.strength}</div>
        <div>inventorySlots : {props.inventorySlots}</div> 
        <div>gold : {props.gold}</div>
      </div>                            
    </div>
  );
};

export default Character;

