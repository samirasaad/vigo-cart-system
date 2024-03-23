import loadable from "@loadable/component";

export const Home = loadable(() => import("./../pages/Home/Home"), {
  fallback: <p>...loading</p>,
});

export const Cart = loadable(() => import("./../pages/Cart/Cart"), {
  fallback: <p>...loading</p>,
});

export const ProductDetails = loadable(
  () => import("./../pages/ProductDetails/ProductDetails"),
  {
    fallback: <p>...loading</p>,
  }
);

export const NotFound = loadable(() => import("./../pages/NotFound/NotFound"), {
  fallback: <p>...loading</p>,
});
