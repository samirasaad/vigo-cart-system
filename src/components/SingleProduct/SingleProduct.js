import { Link } from "react-router-dom";
import CartIcon from "../sharedUi/CartIcon/CartIcon";
import "./SingleProduct.scss";

const SingleProduct = ({ product, handleAddToCart }) => {
  return (
    // <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
    //   <div className="product">
    //     <Link to={`/products/${product.id}`}>
    //   <div className="image">
    //     <img className="img-fluid" src={product.thumbnail} />
    //   </div>
    //     </Link>
    // <button
    //   onClick={() => handleAddToCart(product)}
    //   className="add_to_cart"
    // >
    //   add to cart
    // </button>
    //     <div> {`${product.id}-${product.title}`}</div>
    //   </div>
    // </div>
    <div className="product col-md-6 col-lg-4 col-xl-3" key={product.id}>
      <div class="card  h-100 ">
        <Link to={`/products/${product.id}`}>
          <div className="image">
            <img className="product-cover img-fluid" src={product.thumbnail} />
          </div>
          <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
          </div>
        </Link>

        <div className="card-footer ">
          <p>{product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add_to_cart"
          >
            <CartIcon className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
