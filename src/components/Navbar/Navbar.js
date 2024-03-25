import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import CartIcon from "../sharedUi/CartIcon/CartIcon";

const Navbar = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const { cartItems } = useSelector(({ cart }) => cart);

  useEffect(() => {
    setNumberOfItems(calculateNumberOfItems(cartItems));
  }, [cartItems]);

  // recursion to add the quantity of the current item to the total of previous quantities,
  const calculateNumberOfItems = (cartItems, index = 0) => {
    // if index reaches the end of the cart list => return 0
    if (index >= cartItems.length) {
      return 0;
    }
    const currentItem = cartItems[index];
    let totalItems = 0;
    totalItems += currentItem.Qty;
    return totalItems + calculateNumberOfItems(cartItems, index + 1);
  };

  return (
    <nav className="nav-wrapper mx-5 py-3 d-flex justify-content-between">
      <div>Logo</div>
      <div>
        <Link to="/" className="nav-item bold-font">
          Home
        </Link>
        <Link to="/products" className="nav-item bold-font">
          Products
        </Link>
        <Link to="/cart" className="nav-item" id="destinaion-cart-icon">
          {numberOfItems && (
            <span className="items-number bold-font">{numberOfItems}</span>
          )}
          <CartIcon className="nav-cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
