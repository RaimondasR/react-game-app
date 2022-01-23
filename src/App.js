import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import CharactersList from './components/CharactersList';

function App() {  
  
  return (
    <div className="App d-flex column">                  
      <div>          
        <h2>react-game-app</h2>
      </div>                
      <BrowserRouter>   
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes> 
      </BrowserRouter>  

    </div>
  );
}

export default App;
