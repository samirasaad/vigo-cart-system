import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsThunk } from "../../store/featuresThunks/products";
import {
  calculatePriceAfterDicount,
  handleAddToCart,
} from "../../utils/shared";
import Btn from "../../components/sharedUi/Btn/Btn";
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
    <section className="product-details-wrapper d-flex container justify-content-center align-items-center ">
      <div className="bg-overlay row py-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center py-3 mb-5">
          <img
            className="product-cover"
            src={productDetails.thumbnail}
            alt={productDetails.title}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column py-md-4 py-0">
          <p className="text-white bold-font">
            <span className="secondary-text">Product name</span>
            {` : ${productDetails.title}`}
          </p>
          <p className="text-white bold-font">
            <span className="secondary-text">Product description : </span>
            {` ${productDetails.description}`}
          </p>
          <p className="text-white bold-font">
            <span className="secondary-text"> Category :</span>
            {` ${productDetails.category}`}
          </p>
          <p className="text-white bold-font">
            <span className="secondary-text"> Price before discount :</span>
            {` ${productDetails.price}$`}
          </p>
          <p className="text-white bold-font">
            <span className="secondary-text">Price after discount : </span>
            {` ${calculatePriceAfterDicount(
              productDetails.price,
              productDetails.discountPercentage
            )}`}
          </p>
          <p className="text-white bold-font">
            <span className="secondary-text">Discount percentage : </span>
            {`${productDetails.discountPercentage}%`}
          </p>
          <Btn
            content="Add to cart"
            className="primary-btn primar-gradient m-auto"
            handleClick={() => handleAddToCart(productDetails, "add")}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
