import { Link } from "react-router-dom";
import { emptyCart } from "./../../utils/images";
import Btn from "../sharedUi/Btn/Btn";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={emptyCart} alt="empty-cart" className="empty-cart-icon" />
      <p className="text-white">Your cart is empty</p>
      <Link to="/products">
        <Btn
          content="Discover products"
          className="primary-btn primar-gradient m-auto"
        />
      </Link>
    </div>
  );
};

export default EmptyCart;
