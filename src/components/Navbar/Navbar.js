import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector(({ cart }) => cart);
  return (
    <div>
      <Link to="/">Products</Link>
      <Link to="/cart">
        Cart
        {cartItems?.length && <span>{cartItems.length}</span>}
      </Link>
    </div>
  );
};

export default Navbar;
