import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productActions';

const initialState = {
  productList: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.productList = payload.products;
    });
    builder.addCase(getProducts.rejected, state => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
