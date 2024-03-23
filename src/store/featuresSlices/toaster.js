import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToasterDisplayed: false,
  type: "none",
  msg: "",
};

const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToaster: (state, action) => {
      state.isToasterDisplayed = action.payload.isToasterDisplayed;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
  },
});

export const { showToaster } = toasterSlice.actions;

export default toasterSlice.reducer;
