import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import store from "..";
import { showToaster } from "./toaster";

const persistConfig = {
  key: "products",
  storage,
};
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

// using redux persist to store data in store inside this specifc slice [cart] on refresh
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer;
