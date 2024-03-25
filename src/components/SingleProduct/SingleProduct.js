import { Link } from "react-router-dom";

const SingleProduct = ({ product, handleAddToCart }) => {
  return (
    // <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
    //   <div className="product">
    //     <Link to={`/products/${product.id}`}>
    //   <div className="image">
    //     <img className="img-fluid" src={product.thumbnail} />
    //   </div>
    //     </Link>
    //     <button
    //       onClick={() => handleAddToCart(product)}
    //       className="add_to_cart"
    //     >
    //       add to cart
    //     </button>
    //     <div> {`${product.id}-${product.title}`}</div>
    //   </div>
    // </div>
    <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
      <div class="card h-100 product">
        <Link to={`/products/${product.id}`}>
          <div className="image">
            <img className="img-fluid" src={product.thumbnail} />
          </div>
        </Link>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
