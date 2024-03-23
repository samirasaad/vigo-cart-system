import store from "../store";
import { showLoader } from "../store/featuresSlices/loader";

export const requestHandler = (request) => {
  store.dispatch(showLoader(true));
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "visible";
  }
  return request;
};

export const successHandler = (response) => {
  store.dispatch(showLoader(false));
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "hidden";
  }
  return response;
};

export const errorHandler = (error) => {
  console.log(error);
  store.dispatch(showLoader(false));
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "hidden";
  }
  return Promise.reject({ ...error });
};
