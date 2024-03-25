import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsThunk } from "../../store/featuresThunks/products";
import {
  calculatePriceAfterDicount,
  handleAddToCart,
} from "../../utils/shared";
import Example from "../../components/SlideShow/SlideShow";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { productDetails } = useSelector(({ products }) => products);

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetailsThunk(productId));
    }
  }, [dispatch, productId]);

  return (
    <section className="product-details-wrapper row mx-0 my-3 d-flex justify-content-center align-items-center ">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="product-cover"
          src={productDetails.thumbnail}
          alt={productDetails.title}
        />
      </div>
      <div className="col-md-6">
        <p className="text-white bold-font">
          <span className="heading">Product name</span>
          {` : ${productDetails.title}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Product description : </span>
          {` ${productDetails.description}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading"> Category :</span>
          {` ${productDetails.category}`}
        </p>

        <p className="text-white bold-font">
          <span className="heading"> Price before discount :</span>
          {` ${productDetails.price}$`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Price after discount : </span>
          {` ${calculatePriceAfterDicount(
            productDetails.price,
            productDetails.discountPercentage
          )}`}
        </p>
        <p className="text-white bold-font">
          <span className="heading">Discount percentage : </span>
          {`${productDetails.discountPercentage}%`}
        </p>
        <button
          className="primary-btn primar-gradient my-3"
          onClick={() => handleAddToCart(productDetails)}
        >
          add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
