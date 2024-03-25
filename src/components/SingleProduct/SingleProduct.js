import { Link } from "react-router-dom";
import CartIcon from "../sharedUi/CartIcon/CartIcon";
import "./SingleProduct.scss";
import { Badge } from "react-bootstrap";
import DiscountBadge from "../sharedUi/DiscountBadge/DiscountBadge";

const SingleProduct = ({ product, handleAddToCart }) => {
  return (
    <div
      className="box product col-md-6 col-lg-4 col-xl-3 position-relative"
      key={product.id}
    >
      {product.discountPercentage && (
        <DiscountBadge discountPercentage={product.discountPercentage} />
      )}
      <div class="card border-5  h-100 rounded-4">
        <Link to={`/products/${product.id}`}>
          <div className="image">
            <img
              className="product-cover img-fluid rounded-4"
              src={product.thumbnail}
            />
          </div>
          <div class="card-body mb-5">
            <h5 class="card-title">{product.title}</h5>
          </div>
        </Link>

        <div className="card-footer d-flex justify-content-between align-items-baseline">
          <p className="mb-0">{`${product.price} $`}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add_to_cart bg-transparent border-0"
          >
            <CartIcon className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
