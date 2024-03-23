import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaderDisplayed: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state, action) => {
      state.isLoaderDisplayed = action.payload;
    },
  },
});

export const { showLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
