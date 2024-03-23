import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { router } from "./routing/router";
import "./App.css";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { isLoaderDisplayed } = useSelector(({ loader }) => loader);
  console.log(isLoaderDisplayed);
  return (
    <div className="App">
      {isLoaderDisplayed && <Loader />}
      <div id="primary-spinner-bg"></div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
