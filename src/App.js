import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { router } from "./routing/router";
import Loader from "./components/Loader/Loader";
import Toaster from "./components/toaster/toaster";
import "./App.scss";

const App = () => {
  const { isLoaderDisplayed } = useSelector(({ loader }) => loader);
  const { isToasterDisplayed, msg, type } = useSelector(
    ({ toaster }) => toaster
  );

  return (
    <div className="App">
      {isToasterDisplayed && <Toaster msg={msg} type={type} />}
      <div id="primary-spinner-bg">{isLoaderDisplayed && <Loader />}</div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
