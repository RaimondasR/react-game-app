import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import MainPage from './Pages/MainPage';
import ShopPage from './Pages/ShopPage';
import ArenaPage from './Pages/ArenaPage';
import Toolbar from 'components/Toolbar';
import { useSelector } from 'react-redux';

function App() {
  const char = useSelector((state) => state.character.value.character);
  
  return (
    <div className="App">                                 
                         
      <BrowserRouter>
          {char && <Toolbar />}
      <Routes>
        <Route path='/'       element={<StartPage />} />
        <Route path='/start'  element={<StartPage />} />
        <Route path='/main'   element={<MainPage />} />
        <Route path='/shop'   element={<ShopPage />} />
        <Route path='/arena'  element={<ArenaPage />} />
        
      </Routes> 
      </BrowserRouter>  

    </div>
  );
}

export default App;
