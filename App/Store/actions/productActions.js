import {createAsyncThunk} from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async thunkAPI => {
    return await fetch('https://dummyjson.com/products').then(data =>
      data.json(),
    );
  },
);
