import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQyt, removeFromCart } from "../../store/featuresSlices/cart";
import { handleAddToCart } from "../../utils/shared";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecrementQty = (product) => {
    dispatch(decrementQyt(product));
  };

  return (
    <div>
      {cartItems?.map((product, index) => (
        <p key={product.id}>
          {product.title}
          <button onClick={() => handleRemoveFromCart(index)}>remove</button>
          <div>
            <button onClick={() => handleAddToCart(product)}>+</button>
            <p>{product.Qty}</p>
            <button
              disabled={product.Qty === 1}
              onClick={() => handleDecrementQty(product)}
            >
              -
            </button>
          </div>
        </p>
      ))}
    </div>
  );
};

export default Cart;
