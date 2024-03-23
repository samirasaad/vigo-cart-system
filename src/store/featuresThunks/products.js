import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosInstance";

let page = 0;
export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axiosInstance.get(
    //   `/products?limit=30&skip=${page}&delay=1500`
      `/products?limit=0&delay=1000`
    );
    page = page + 30;
    // const res = getPostsApi();
    return res.data;
  }
);

export const getProductDetailsThunk = createAsyncThunk(
  "products/getProductDetails",
  async (id) => {
    const res = await axiosInstance.get(`/products/${id}`);
    // const res = getPostsApi();
    return res.data;
  }
);
