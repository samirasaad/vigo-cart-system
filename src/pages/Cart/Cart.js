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
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
            <div className="col-lg-8">
              {cartItems.length ? (
                cartItems.map((product, index) => (
                  <SingleCartItem
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    index={index}
                    handleDecrementQty={handleDecrementQty}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p>no data found</p>
              )}
            </div>
            <div className="col-lg-4">
              <h2 className="text-white bold-font mb-3">Order summary</h2>
              <OrderSummary cartItems={cartItems} />
            </div>
          </>
        ) : (
          <p>lodinggggssss</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
