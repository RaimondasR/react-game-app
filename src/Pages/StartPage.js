import React from 'react';
import CharactersList from '../components/CharactersList';
import MonstersList from '../components/MonstersList';
import InventoryList from '../components/InventoryList';

const StartPage = () => {
  
  return (    
      <div className="StartPage d-flex column center">                                     
        <h3>react-game-app</h3>           
        <h3>START Page</h3>
        <h4>To start the game please choose a Character and click it ...</h4>
        <CharactersList /> 
        <MonstersList />
        <InventoryList />     
      </div>                  
    
  );
};

export default StartPage;
