import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { router } from "./routing/router";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Toaster from "./components/toaster/toaster";

const App = () => {
  const { isLoaderDisplayed } = useSelector(({ loader }) => loader);
  const { isToasterDisplayed, msg, type } = useSelector(
    ({ toaster }) => toaster
  );

  return (
    <div className="App">
      {isLoaderDisplayed && <Loader />}
      {isToasterDisplayed && <Toaster msg={msg} type={type} />}
      <div id="primary-spinner-bg"></div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
