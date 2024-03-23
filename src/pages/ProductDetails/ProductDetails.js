import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsThunk } from "../../store/featuresThunks/products";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { productDetails } = useSelector(({ products }) => products);

  console.log("productDetails", productDetails);
  
  useEffect(() => {
    if (productId) {
      dispatch(getProductDetailsThunk(productId));
    }
  }, [dispatch, productId]);

  return <p>details</p>;
};

export default ProductDetails;
