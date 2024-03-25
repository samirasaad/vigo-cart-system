import store from "../store";
import { addToCart } from "../store/featuresSlices/cart";
import { showToaster } from "../store/featuresSlices/toaster";

export const handleAddToCart = (itemToBeAdded) => {
  // if (
  //   store.getState().cart.cartItems.find((item) => item.id === itemToBeAdded.id)
  // ) {
  //   console.log("item already in cart increase quantity");
  // } else {
  // }
  store.dispatch(addToCart(itemToBeAdded));
  store.dispatch(
    showToaster({
      isToasterDisplayed: true,
      type: "success",
      msg: "product added to cart successfully",
    })
  );
};

// calculate price after dicount
export const calculatePriceAfterDicount = (
  originalPrice,
  discountPercentage
) => {
  return `${Math.ceil((discountPercentage / 100) * originalPrice)}$`;
};
