import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import { showToaster } from "./toaster";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
      // store.dispatch(
      //   showToaster({
      //     isToasterDisplayed: true,
      //     type: "success",
      //     msg: "product removed successfully",
      //   })
      // );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
