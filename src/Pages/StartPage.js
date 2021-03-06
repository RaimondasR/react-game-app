import React from 'react';
import CharactersList from '../components/CharactersList';

const StartPage = () => {
  
  return (    
      <div className="StartPage d-flex column center">                                     
        <div className="d-flex row space-evn">
          <div className="grow1 m0"><h3>react-game-app</h3></div>   
          <div className="grow1 m0"><h3>START GAME Page</h3></div>
          <div className="grow1 m0"><h4>Please choose a Character to play and click it ...</h4></div>                 
        </div>        
        <CharactersList />         
      </div>                  
    
  );
};

export default StartPage;
