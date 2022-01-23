import React from 'react';
import CharactersList from '../components/CharactersList';

const StartPage = () => {
  
  return (
    <div>
      <div className="d-flex column center"> 
        <h3>START Page</h3>
        <h4>to start the game please choose a Character and click on it ...</h4>
      </div>      
      <CharactersList />       
    </div>
  );
};

export default StartPage;
