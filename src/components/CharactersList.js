import React from 'react';

const CharactersList = (props) => {
  return (
    <div className ="d-flex row evenly f-wrap">

      {props.characters.map((character, index) => (
        <div>
          <div className="Character d-flex column">
            <div className="Image">
              <img src={character.image} alt="character image" /> 
            </div>  
            <div className="Info d-flex column txt-left">
              <div>race : {character.race}</div>
              <div>damage : {character.damage}</div> 
              <div>health : {character.health}</div> 
              <div>energy : {character.energy}</div>
              <div>stamina : {character.stamina}</div> 
              <div>strength : {character.strength}</div>
              <div>inventorySlots : {character.inventorySlots}</div> 
              <div>gold : {character.gold}</div>
            </div>                            
          </div>
        </div>
      ))};
      
    </div>
  );
};

export default CharactersList;

