import {createSlice} from '@reduxjs/toolkit';

export const characterSlice = createSlice ({
    name: "character",
    initialState: {
      value: {
        character: null,
        weapon: null
      },
    },
    reducers: {
      setCharacter: (state, {payload}) => {
        state.value.character = payload;  
      },  
    }

})

export const {setCharacter} = characterSlice.actions;

export default characterSlice.reducer;
