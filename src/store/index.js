import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./featuresSlices/products";
import cartReducer from "./featuresSlices/cart";
import toasterReducer from "./featuresSlices/toaster";
import loaderReducer from "./featuresSlices/loader";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    toaster: toasterReducer,
    loader: loaderReducer
  },
});

export default store;
