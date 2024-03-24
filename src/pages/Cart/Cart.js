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

  const calculateItemPrice = (product) => {
    return `${product.price * product.Qty} $`;
  };

  return (
    <div>
      {cartItems?.length > 0 && (
        <button onClick={handleRemoveAll}>remove all</button>
      )}
      {cartItems ? (
        cartItems.length ? (
          cartItems.map((product, index) => (
            <div className="d-flex">
              <p key={product.id}>{product.title}</p>
              <div className="d-flex">
                <button onClick={() => handleRemoveFromCart(index)}>
                  remove
                </button>
                <button onClick={() => handleAddToCart(product)}>+</button>
                <p>{product.Qty}</p>
                <button
                  disabled={product.Qty === 1}
                  onClick={() => handleDecrementQty(product)}
                >
                  -
                </button>
                <div>{calculateItemPrice(product)}</div>
              </div>
            </div>
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
