import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart" id="cart-icon">
        Cart
        {numberOfItems && <span>{numberOfItems}</span>}
      </Link>
    </div>
  );
};

export default Navbar;
