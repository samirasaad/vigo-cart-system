import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./featuresSlices/products";
import cartReducer from "./featuresSlices/cart";
import toasterReducer from "./featuresSlices/toaster";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    toaster: toasterReducer,
  },
});

export default store;
