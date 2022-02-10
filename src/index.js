import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import characterReducer from "./features/characters";
import monstersReducer from "./features/monsters";
import inventoryReducer from "./features/inventory"

const store = configureStore({
  reducer: {
      character: characterReducer,
      monsters: monstersReducer,
      inventory: inventoryReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);