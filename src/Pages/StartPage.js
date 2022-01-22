import React, { useEffect} from 'react';
import CharactersList from '../components/CharactersList';
import {useDispatch} from "react-redux";
import {setCharacters} from '../features/characters';

const StartPage = () => {
  const dispatch =useDispatch();

  

  return (
    <div>
      <CharactersList />
    </div>
  );
};

export default StartPage;
