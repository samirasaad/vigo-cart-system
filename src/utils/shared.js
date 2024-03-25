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

/******************************* calculations ************************/
// recursion to add the quantity of the current item to the total of previous quantities,
export const calculateNumberOfItems = (cartItems, index = 0) => {
  // if index reaches the end of the cart list => return 0
  if (index >= cartItems.length) {
    return 0;
  }
  const currentItem = cartItems[index];
  let totalItems = 0;
  totalItems += currentItem.Qty;
  return totalItems + calculateNumberOfItems(cartItems, index + 1);
};

// calculate price after dicount
export const calculatePriceAfterDicount = (
  originalPrice,
  discountPercentage
) => {
  return `${Math.ceil(
    originalPrice - (discountPercentage / 100) * originalPrice
  )} $`;
};

// calculate price for each item according to its quantity
export const calculateItemPrice = (product) => {
  return `${Math.ceil(
    product.price * product.Qty -
      (product.discountPercentage / 100) * product.price * product.Qty
  )} `;
};

/* calculate total price total price for each item according to its quantity 
 + shipping 
 + taxes
   and after that appling discount code
*/

// export const calculateTotalPrice = (
//   cartItems,
// applyDiscount,
// { shipping, taxes, discountPercentage, percentageIncrease=0 },
//   index = 0
// ) => {
//   // Base case: if index exceeds the array length, return 0
//   if (index >= cartItems.length) {
//     return 0;
//   }

//   // Calculate the total price of the current item including percentage increase (price * quantity * (1 + percentageIncrease / 100))
//   const currentItem = cartItems[index];
//   const totalPriceOfItem =
//     currentItem.price * currentItem.Qty * (1 + percentageIncrease / 100);

//   // Recursively call to calculate the total price of the remaining items
//   const totalPriceOfRemainingItems = calculateTotalPrice(
//     cartItems,
//     false,
//     {
//       shipping,
//       taxes,
//       discountPercentage,
//       percentageIncrease: cartItems[index].discountPercentage,
//     },
//     index + 1
//   );

//   // Return the sum of the total price of this item and the total price of remaining items
//   let totalItemsPrice = totalPriceOfItem + totalPriceOfRemainingItems;

//   // Add shipping and taxes to the total price
//   totalItemsPrice += shipping + taxes;

//   // Apply discount if required
//   if (applyDiscount) {
//     const discountAmount = Math.ceil(
//       (discountPercentage / 100) * totalItemsPrice
//     );
//     totalItemsPrice -= discountAmount;
//   }
//   console.log(totalItemsPrice);
//   return totalItemsPrice;
// };
export const calculateTotalPrice = (
  cartItems,
  applyDiscount,
  { shipping, taxes, discountPercentage },
  index = 0
) => {
  if (index >= cartItems.length) {
    return 0;
  }
  const currentItem = cartItems[index];
  let total = 0;

  // total price of all quantities with discount percentage on each item
  total += +calculateItemPrice(currentItem);

  // add taxes and shipping to total
  total = total + shipping + taxes;

  //  if with code apply it
  if (applyDiscount) {
    return Math.ceil(total - (discountPercentage / 100) * total);
  } else {
    return total;
  }
};
