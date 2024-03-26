import { Link } from "react-router-dom";
import { emptyCart } from "./../../utils/images";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={emptyCart} alt="empty-cart" className="empty-cart-icon" />
      <p className="text-white">Your cart is empty</p>
      <Link to="/products">
        <button className="primary-btn primar-gradient m-auto">
          discover products
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
