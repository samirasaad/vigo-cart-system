import store from "../store";
import { addToCart } from "../store/featuresSlices/cart";
import { showToaster } from "../store/featuresSlices/toaster";

/******************** handle add product to cart and increasing quantity ************************/
export const handleAddToCart = (itemToBeAdded) => {
  store.dispatch(addToCart(itemToBeAdded));
  store.dispatch(
    showToaster({
      isToasterDisplayed: true,
      type: "success",
      msg: "product added to cart successfully",
    })
  );
};

/**************************************** calculations *************************************/

/* recursion to add the quantity of the current item to the total of
 previous quantities to get cart ites numbers in navabar*/
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

// calculate each product price after dicount
export const calculatePriceAfterDicount = (
  originalPrice,
  discountPercentage
) => {
  return `${(
    originalPrice -
    (discountPercentage / 100) * originalPrice
  ).toFixed(2)} $`;
};

// calculate price for each item according to its quantity
export const calculateItemPrice = (product) => {
  return `${(
    product.price * product.Qty -
    (product.discountPercentage / 100) * product.price * product.Qty
  ).toFixed(2)} `;
};

// calculate price of all quantities with discount percetage on each item
export const calculateSubtotal = (items) => {
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // calculate the total price of the item (price * quantity)
    const totalPrice = item.price * item.Qty;

    // apply discount if applicable
    const discountedPrice = totalPrice * (1 - item.discountPercentage / 100);

    // add the discounted price to the subtotal
    subtotal += discountedPrice;
  }

  return subtotal.toFixed(2);
};
/* calculate total price total price for each item according to its quantity 
 + shipping 
 + taxes
   and after that appling discount code

   ///// discount codes /////
   abc => 15%
   abcd => 20%
   abcde => 30%
*/
export const calculateTotalPrice = (
  cartItems,
  applyDiscount,
  { shipping, taxes, discountPercentage }
) => {
  /* calculate sub total=> all items according to 
  its quantity and adding  discount percentage on each item*/
  let subTotal = calculateSubtotal(cartItems);

  // addi to sub total taxes and shipping
  let priceWithTaxesAndShipping = +subTotal + +taxes + +shipping;

  // if there is dicount code apply it
  let priceWithTaxesAndShippingAndDisountCode =
    subTotal - (discountPercentage / 100) * subTotal;

  return applyDiscount
    ? `${priceWithTaxesAndShippingAndDisountCode.toFixed(
        2
      )} $ congrats you had  ${discountPercentage} % off`
    : `${priceWithTaxesAndShipping.toFixed(2)} $`;
};
