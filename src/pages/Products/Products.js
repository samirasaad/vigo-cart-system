import { useEffect, useState } from "react";
import { axiosInstance } from "./../../axios/axiosInstance";
import useInfiniteScroll from "./../../hooks/UseInfinteScroll";
import { productsListApiUrl } from "../../network/apis";
import { Link } from "react-router-dom";
import { getProductsThunk } from "../../store/featuresThunks/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/featuresSlices/cart";
import { handleAddToCart } from "../../utils/shared";
import "./Products.scss";
import "./../../utils/animation";
import { mainPhoto } from "../../utils/images";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { Spinner } from "react-bootstrap";

// skip => should equals number of limit as dummy json does not contain page keyword for pagination
const Products = () => {
  const dispatch = useDispatch();
  //   const [page, setPage] = useState(0);
  // const [productsList, seproductsList] = useState([]);
  // const [pagination, setPagination] = useState({});

  const { productsList =[], pagination } = useSelector(({ products }) => products);

  const fetchData = async () => {
    // try {
    //   if (pagination?.total !== productsList.length) {
    //     setILoading(true);
    //     const res = await axiosInstance.get(
    //       `${productsListApiUrl}?limit=30&skip=${page}&delay=1500`
    //     );
    //     console.log(res);
    //     if (res) {
    //       setILoading(false);
    //       setPage(page + 30);
    //       seproductsList((prevProducts) => [
    //         ...prevProducts,
    //         ...res.data.products,
    //       ]);
    //       setPagination({
    //         skip: res.data.skip,
    //         total: res.data.total,
    //         limit: res.data.limit,
    //       });
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // dispatch(getProductsThunk());
  };

  //   const [isLoading, setILoading] = useInfiniteScroll(fetchData);

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
