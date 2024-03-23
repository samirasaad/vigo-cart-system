import loadable from "@loadable/component";
import Loader from "../components/Loader/Loader";

export const Home = loadable(() => import("./../pages/Home/Home"), {
  fallback: <Loader />,
});

export const Cart = loadable(() => import("./../pages/Cart/Cart"), {
  fallback: <Loader />,
});

export const ProductDetails = loadable(
  () => import("./../pages/ProductDetails/ProductDetails"),
  {
    fallback: <Loader />,
  }
);

export const NotFound = loadable(() => import("./../pages/NotFound/NotFound"), {
  fallback: <Loader />,
});
