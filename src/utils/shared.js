import store from "../store";
import { addToCart } from "../store/featuresSlices/cart";

export const handleAddToCart = (itemToBeAdded) => {
  if (
    store.getState().cart.cartItems.find((item) => item.id === itemToBeAdded.id)
  ) {
    console.log("item already in cart increase quantity");
  } else {
    store.dispatch(addToCart(itemToBeAdded));
  }
};
