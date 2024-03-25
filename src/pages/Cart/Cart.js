import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQyt,
  removeFromCart,
  removeAll,
} from "../../store/featuresSlices/cart";
import SingleCartItem from "../../components/SingleCartItem/SingleCartItem";
import { handleAddToCart } from "../../utils/shared";
import "./Cart.scss";

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
    <section className="cart-wrapper container ">
      {cartItems?.length > 0 && (
        <button
          className="bold-font mx-3 py-3 text-white border-0 bg-transparent"
          onClick={handleRemoveAll}
        >
          Remove all
        </button>
      )}
      <div className="row mx-0">
        {cartItems ? (
          <>
            <div className="col-md-8">
              {cartItems.length ? (
                cartItems.map((product, index) => (
                  <SingleCartItem
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    index={index}
                    handleDecrementQty={handleDecrementQty}
                    handleAddToCart={handleAddToCart}
                    calculateItemPrice={calculateItemPrice}
                  />
                ))
              ) : (
                <p>no data found</p>
              )}
            </div>
            <div className="col-md-4">sumarry</div>
          </>
        ) : (
          <p>lodinggggssss</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
