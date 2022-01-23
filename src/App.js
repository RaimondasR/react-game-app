import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import MainPage from './Pages/MainPage';
import ShopPage from './Pages/ShopPage';
import ArenaPage from './Pages/ArenaPage';

function App() {  
  
  return (
    <div className="App">                                 
                         
      <BrowserRouter>   
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
