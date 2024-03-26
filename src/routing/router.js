import { createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Home,
  ProductDetails,
  Products,
} from "./loadableComponents";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
