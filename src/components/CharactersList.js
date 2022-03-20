import React from 'react';
import {useDispatch} from 'react-redux';
import {setCharacter} from '../features/characters';
import MainPage from '../Pages/MainPage';
import { useNavigate } from 'react-router-dom';

const characters = [
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte097d3ac18c5b8ed/6165ec51ff59d903990f26e3/EE3E9KVL9ROW1613677289232.png",
    race: "Human",
    damage: 3,
    health: 150,
    energy: 50,
    stamina: 3,
    strength: 1,
    inventorySlots: 3,
    gold: 100
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png",
    race: "Dwarf",
    damage: 5,
    health: 90,
    energy: 30,
    stamina: 4,
    strength: 3,
    inventorySlots: 5,
    gold: 300
  },
  {
    image: "https://i.pinimg.com/originals/80/45/c3/8045c39d9427b3a842a63f88f7725c4a.png",
    race: "Superman",
    damage: 150,
    health: 10000,
    energy: 100,
    stamina: 3,
    strength: 1,
    inventorySlots: 2,
    gold: 1000
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdd9c3bc7630ea097/6165ee1b85a779070bc77f55/A62H0NRB056O1613677289519.png",
    race: "Elf",
    damage: 4,
    health: 100,
    energy: 40,
    stamina: 5,
    strength: 1,
    inventorySlots: 2,
    gold: 200
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5440cbe6b11972e4/6165e787c7341a058edee6c1/ZGHFCTYH33H41613677288710.png",
    race: "Gnome",
    damage: 3,
    health: 80,
    energy: 80,
    stamina: 7,
    strength: 1,
    inventorySlots: 4,
    gold: 10000
  },
  {
    image: "https://www.pngarts.com/files/4/Terminator-Transparent-Background-PNG.png",
    race: "Terminator",
    damage: 60,
    health: 8000,
    energy: 100,
    stamina: 3,
    strength: 1,
    inventorySlots: 3,
    gold: 20000
  },
  {
    image: "https://www.pngarts.com/files/4/Captain-Marvel-PNG-Photo.png",
    race: "Captain Marvel",
    damage: 100,
    health: 10000,
    energy: 100,
    stamina: 3,
    strength: 1,
    inventorySlots: 3,
    gold: 1000
  },      
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8a0bea138cdc9f77/6165eebb70b75d5011e405d4/GYI6XASNQ8YE1613677290450.png",
    race: "Orc",
    damage: 7,
    health: 120,
    energy: 40,
    stamina: 1,
    strength: 10,
    inventorySlots: 5,
    gold: 50
  },
  {
    image: "https://www.pngkey.com/png/full/305-3058850_christian-bale-png-transparent-image-batman-dark-knight.png",
    race: "Batman",
    damage: 100,
    health: 7000,
    energy: 90,
    stamina: 5,
    strength: 2,
    inventorySlots: 5,
    gold: 50000
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte86b6ed1f29656b9/6165e7dedfd0436b6dcf6e2e/YAAFZMAKCVPG1613677288954.png",
    race: "Goblin",
    damage: 5,
    health: 90,
    energy: 90,
    stamina: 5,
    strength: 2,
    inventorySlots: 3,
    gold: 200
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt9d279b401555fd09/6165efc047c23d6a01ffdf49/NF9Y4RYPBLZ91613677291342.png",
    race: "Troll",
    damage: 6,
    health: 100,
    energy: 70,
    stamina: 4,
    strength: 4,
    inventorySlots: 3,
    gold: 100
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0b1f2cd145aedbcd/6165f001a3e18902e03811d3/4UX5EM1CFKV81613677292421.png",
    race: "Undead",
    damage: 4,
    health: 40,
    energy: 50,
    stamina: 10,
    strength: 1,
    inventorySlots: 8,
    gold: 400
  },
  {
    image: "https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG14.png",
    race: "Chuck Norris",
    damage: 50,
    health: 5000,
    energy: 100,
    stamina: 3,
    strength: 1,
    inventorySlots: 5,
    gold: 1000
  },
  {
    image: "https://snipstock.com/assets/cdn/png/3dcac467dcd1b41fc5beb1465729ff9e.png",
    race: "Black Widow",
    damage: 8,
    health: 4000,
    energy: 100,
    stamina: 3,
    strength: 1,
    inventorySlots: 5,
    gold: 900
  }
];

const CharactersList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  // const state = useSelector((state) => state.characters.value);
  // const characters = useSelector((state) => state.characters.value);
 
  function setChar(char){
    dispatch(setCharacter(char)); 
    nav('/main');
    
  }

  return (
    <div className ="d-flex row center f-wrap">      
      {characters.map((x, i) => (        
          <div className="Character d-flex column mr5 mb5" 
               key={i}
               onClick={() => setChar(x)}>
            <div className="Image">
              <img src={x.image} alt=''/> 
            </div>  
            <div className="Info d-flex column txt-left fs12">
              <div><h4>race : {x.race}</h4></div>
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

