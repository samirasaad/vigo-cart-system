import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../sharedUi/CartIcon/CartIcon";
import { calculateNumberOfItems } from "../../utils/shared";
import "./Navbar.scss";

const Navbar = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const { cartItems } = useSelector(({ cart }) => cart);

  useEffect(() => {
    setNumberOfItems(calculateNumberOfItems(cartItems));
  }, [cartItems]);

  return (
    <nav className="nav-wrapper mx-5 py-3 d-flex justify-content-between">
      <h2 className="text-white bold-font">Logo</h2>
      <div>
        <Link to="/" className="nav-item bold-font">
          Home
        </Link>
        <Link to="/products" className="nav-item bold-font">
          Products
        </Link>
        <Link to="/cart" className="nav-item" id="destinaion-cart-icon">
          {numberOfItems >0 && (
            <span className="items-number bold-font">{numberOfItems}</span>
          )}
          <CartIcon className="nav-cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
