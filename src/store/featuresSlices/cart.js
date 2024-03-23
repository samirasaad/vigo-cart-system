import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import store from "..";
import { showToaster } from "./toaster";

const persistConfig = {
  key: "cart",
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
      let productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      /* if product has no index in list it means that its first add to cart, 
       just add Qty key in its object with value  equals to 1 */
      if (productIndex === -1) {
        state.cartItems = [...state.cartItems, { ...action.payload, Qty: 1 }];
      } else {
        // if product has index in list it means its already added before, just increase its Qty
        state.cartItems[productIndex].Qty =
          state.cartItems[productIndex].Qty + 1;
        state.cartItems = [...state.cartItems];
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      // state.cartItems = state.cartItems.filter(
      //   (product) => product.id !== action.payload
      // );

      // store.dispatch(
      //   showToaster({
      //     isToasterDisplayed: true,
      //     type: "success",
      //     msg: "product removed successfully",
      //   })
      // );
    },
    decrementQyt: (state, action) => {
      let productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      // decremant product Qty means its already added before, just decrese its Qty
      state.cartItems[productIndex].Qty = state.cartItems[productIndex].Qty - 1;
      state.cartItems = [...state.cartItems];
    },
  },
});

export const { addToCart, removeFromCart, decrementQyt } = cartSlice.actions;

// using redux persist to store data in store inside this specifc slice [cart] on refresh
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer;
