import React from 'react';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const CharactersList = () => {
  const dispatch = useDispatch();

  const chars = useSelector((state) => state.characters.value)

  return (
    <div className ="d-flex row evenly f-wrap">

      {chars.map((x, i) => (
        <div>
          <div className="Character d-flex column">
            <div className="Image">
              <img src={x.image} alt=''/> 
            </div>  
            <div className="Info d-flex column txt-left">
              <div>race : {x.race}</div>
              <div>damage : {x.damage}</div> 
              <div>health : {x.health}</div> 
              <div>energy : {x.energy}</div>
              <div>stamina : {x.stamina}</div> 
              <div>strength : {x.strength}</div>
              <div>inventorySlots : {x.inventorySlots}</div> 
              <div>gold : {x.gold}</div>
            </div>                            
          </div>
        </div>
      ))};
      
    </div>
  );
};

export default CharactersList;

