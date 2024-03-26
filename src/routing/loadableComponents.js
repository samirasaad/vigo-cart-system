import loadable from "@loadable/component";
import Loader from "../components/sharedUi/Loader/Loader";

export const Home = loadable(() => import("./../pages/Home/Home"), {
  fallback: <Loader />,
});

export const Cart = loadable(() => import("./../pages/Cart/Cart"), {
  fallback: <Loader />,
});

export const Products = loadable(() => import("./../pages/Products/Products"), {
  fallback: <Loader />,
});

export const ProductDetails = loadable(
  () => import("./../pages/ProductDetails/ProductDetails"),
  {
    fallback: <Loader />,
  }
);

export const NotFoundPage = loadable(
  () => import("./../pages/NotFoundPage/NotFoundPage"),
  {
    fallback: <Loader />,
  }
);
