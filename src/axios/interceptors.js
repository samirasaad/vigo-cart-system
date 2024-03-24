import store from "../store";
import { showLoader } from "../store/featuresSlices/loader";
import { showToaster } from "../store/featuresSlices/toaster";

/**********************************  request interceptor handler ************************/
export const requestHandler = (request) => {
  store.dispatch(showLoader(true));
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "visible";
  }
  return request;
};

/**********************************  success interceptor handler ************************/
export const successHandler = (response) => {
  store.dispatch(showLoader(false));
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "hidden";
  }
  return response;
};

/**********************************  error interceptor handler ************************/
export const errorHandler = (error) => {
  // console.log(error);
  store.dispatch(showLoader(false));
  store.dispatch(
    showToaster({
      msg: error.message,
      isToasterDisplayed: true,
      type: "error",
    })
  );
  let spinnerElem = document.getElementById("primary-spinner-bg");
  if (spinnerElem) {
    document.getElementById("primary-spinner-bg").style.visibility = "hidden";
  }
  return Promise.reject({ ...error });
};
