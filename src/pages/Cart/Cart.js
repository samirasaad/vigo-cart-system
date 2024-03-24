import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQyt,
  removeFromCart,
  removeAll,
} from "../../store/featuresSlices/cart";
import { handleAddToCart } from "../../utils/shared";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);

  const handleRemoveFromCart = (productIndex) => {
    dispatch(removeFromCart(productIndex));
  };

  const handleDecrementQty = (product) => {
    dispatch(decrementQyt(product));
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      {cartItems?.length > 0 && (
        <button onClick={handleRemoveAll}>remove all</button>
      )}
      {cartItems ? (
        cartItems.length ? (
          cartItems.map((product, index) => (
            <p key={product.id}>
              {product.title}
              <button onClick={() => handleRemoveFromCart(index)}>
                remove
              </button>
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
          ))
        ) : (
          <p>no data found</p>
        )
      ) : (
        <p>lodinggggssss</p>
      )}
    </div>
  );
};

export default Cart;
