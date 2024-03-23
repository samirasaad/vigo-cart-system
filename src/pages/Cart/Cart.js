import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/featuresSlices/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      {cartItems?.map((item,index) => (
        <p key={item.id}>
          {item.title}
          <button onClick={() => handleRemoveFromCart(index)}>remove</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
