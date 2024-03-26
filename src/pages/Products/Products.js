import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { getProductsThunk } from "../../store/featuresThunks/products";
import "./../../utils/animation";
import { handleAddToCart } from "../../utils/shared";

const Products = () => {
  const dispatch = useDispatch();
  const { productsList = [] } = useSelector(({ products }) => products);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(getProductsThunk());
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container products-list pb-5 ">
      <div class="row  g-4">
        {productsList?.map((product) => (
          <SingleProduct product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
