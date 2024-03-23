import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div id="primary-spinner-bg"></div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
