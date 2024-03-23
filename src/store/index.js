import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./featuresSlices/products";
import cartReducer from "./featuresSlices/cart";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;