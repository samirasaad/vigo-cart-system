import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { router } from "./routing/router";
import Loader from './components/sharedUi/Loader/Loader'
import Toaster from './components/sharedUi/Toaster/Toaster'
import "./App.scss";

const App = () => {
  const { isLoaderDisplayed } = useSelector(({ loader }) => loader);
  const { isToasterDisplayed, msg, type } = useSelector(
    ({ toaster }) => toaster
  );

  return (
    <div className="App position-relative">
      <div id="primary-spinner-bg">{isLoaderDisplayed && <Loader />}</div>
      <RouterProvider router={router} />
      {isToasterDisplayed && (
        <Toaster
          isToasterDisplayed={isToasterDisplayed}
          msg={msg}
          type={type}
        />
      )}
    </div>
  );
};

export default App;
