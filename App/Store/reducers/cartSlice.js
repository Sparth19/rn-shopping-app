import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartList.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartList.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartList.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartList.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        cartSlice.caseReducers.removeItem(state, action);
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartList.filter(
        item => item.id !== action.payload,
      );
      state.cartList = removeItem;
    },
  },
});

export const {addToCart, incrementQuantity, decrementQuantity, removeItem} =
  cartSlice.actions;

export default cartSlice.reducer;
