import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCharacters} from '../features/characters'
import MainPage from '../Pages/MainPage';

const CharactersList = () => {

  const state = useSelector((state) => state.characters.value);
 
  return (
    <div className ="d-flex row evenly f-wrap">      
      {state.map((x, i) => (        
          <div className="Character d-flex column" 
               key={i}
               onClick={() => {<MainPage />}}>
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
        
      ))};      
    </div>
  );
};

export default CharactersList;

