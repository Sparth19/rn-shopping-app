import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favList: [],
};

const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favList = state.favList.filter(item => item.id !== action.payload);
    },
  },
});

export default favSlice.reducer;

export const {addFavorite, removeFavorite} = favSlice.actions;
