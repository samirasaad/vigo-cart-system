import {
  calculateItemPrice,
  calculatePriceAfterDicount,
} from "../../utils/shared";
import "./SingleCartItem.scss";

const SingleCartItem = ({
  product,
  handleAddToCart,
  handleDecrementQty,
  handleRemoveFromCart,
  index,
}) => {
  return (
    <div className=" product p-4 mx-0 row my-3" key={product.id}>
      <div className="col-md-4">
        <div class="card border-5  h-100 rounded-4">
          <div className="image">
            <img
              className="product-cover img-fluid rounded-4"
              src={product.thumbnail}
            />
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <p className="text-white bold-font">
          <span className="heading">Product name : </span>
          {`  ${product.title}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Product description : </span>
          {` ${product.description}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading"> Category :</span>
          {` ${product.category}`}
        </p>

        <p className="text-white bold-font">
          <span className="heading"> Price before discount :</span>
          {` ${product.price} $`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Price after discount : </span>
          {` ${calculatePriceAfterDicount(
            product.price,
            product.discountPercentage
          )}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Discount percentage : </span>
          {`${product.discountPercentage} %`}
        </p>

        <div className="d-flex align-items-baseline">
          <button
            className="bg-transparent text-white px-3 py-1"
            disabled={product.Qty === 1}
            onClick={() => handleDecrementQty(product)}
          >
            -
          </button>
          <p className="bold-font text-white px-3">{product.Qty}</p>
          <button
            className=" bg-transparent text-white px-3 py-1"
            onClick={() => handleAddToCart(product)}
          >
            +
          </button>
          <p className="mb-0 text-white bold-font mx-3">
            {calculateItemPrice(product)}
          </p>
          <button
            className="remove-from-cart"
            onClick={() => handleRemoveFromCart(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
