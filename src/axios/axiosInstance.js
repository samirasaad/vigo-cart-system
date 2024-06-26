import axios from "axios";
import { errorHandler, requestHandler, successHandler } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});


/********************** attach intereptors to axios instance ****************/
// Handle request process
axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
