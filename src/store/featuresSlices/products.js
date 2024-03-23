import { createSlice, current } from "@reduxjs/toolkit";
import {
  getProductDetailsThunk,
  getProductsThunk,
} from "../featuresThunks/products";

const initialState = { productsList: [], productDetails: {} };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /******************* getting products list thunk request ***********************/
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isLoading = true;
      console.log("request is pending");
    });
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = [...state.productsList, ...action.payload.products];
      state.pagination = {
        limit: action.payload.limit,
        skip: action.payload.skip,
        total: action.payload.total,
      };
      // logging state inside reducer will give proxy object
      // current is alternative from redux toolkit view state
      console.log("state", current(state));
      console.log("request is fullfilled");
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("request is failed");
    });

    /****************************** getting product details ****************************/
    builder.addCase(getProductDetailsThunk.pending, (state) => {
      state.isLoading = true;
      console.log("request is pending");
    });
    builder.addCase(getProductDetailsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
      console.log("request is fullfilled");
    });
    builder.addCase(getProductDetailsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("request is failed");
    });
  },
});

export default productsSlice.reducer;
