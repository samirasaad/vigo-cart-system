import axios from "axios";
import { requestHandler, successHandler } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});


axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  // (error) => errorHandler(error)
);
