import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosInstance";

let page = 0;
export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axiosInstance.get(
      `/products?limit=100&delay=1000`
    );
    page = page + 30;
    return res.data;
  }
);

export const getProductDetailsThunk = createAsyncThunk(
  "products/getProductDetails",
  async (id) => {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  }
);
