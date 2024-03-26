import { Link } from "react-router-dom";
import CartIcon from "../sharedUi/CartIcon/CartIcon";
import DiscountBadge from "../sharedUi/DiscountBadge/DiscountBadge";
import { calculatePriceAfterDicount } from "../../utils/shared";
import Btn from "../sharedUi/Btn/Btn";
import "./SingleProduct.scss";

const SingleProduct = ({ product, handleAddToCart }) => {
  return (
    <div
      className="
    product-item product col-md-6 col-lg-4 col-xl-3 position-relative"
    >
      {product.discountPercentage && (
        <DiscountBadge
          discountPercentage={product.discountPercentage}
          className={"bold-font"}
        />
      )}
      <div className="card border-5 h-100 rounded-4">
        <Link to={`/products/${product.id}`}>
          <div className="image">
            <img
              className="product-cover img-fluid rounded-4"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="card-body mb-5">
            <h5 className="card-title semiBold-font title">{product.title}</h5>
          </div>
        </Link>
        <div className="card-footer d-flex justify-content-between align-items-stretch">
          <div className="d-flex">
            <p
              className={`mb-0 bold-font original-price ${
                product.discountPercentage ? "text-decoration-line-through" : ""
              }`}
            >
              {`${product.price}$`}
            </p>

            <p className="bold-font mb-0 mx-3">
              {calculatePriceAfterDicount(
                product.price,
                product.discountPercentage
              )}
            </p>
          </div>
          <Btn
            content={<CartIcon className="bounce_button  add-to-cart-icon" />}
            className="wrapper add_to_cart bg-transparent border-0"
            handleClick={() => handleAddToCart(product, "add")}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
