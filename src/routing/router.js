import { createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Home,
  NotFound,
  ProductDetails,
  Products,
} from "./loadableComponents";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
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
