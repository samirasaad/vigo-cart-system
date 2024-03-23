import { useEffect, useState } from "react";
import { axiosInstance } from "./../../axios/axiosInstance";
import useInfiniteScroll from "./../../hooks/UseInfinteScroll";
import { productsListApiUrl } from "../../network/apis";
import { Link } from "react-router-dom";
import { getProductsThunk } from "../../store/featuresThunks/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/featuresSlices/cart";
import { handleAddToCart } from "../../utils/shared";

// skip => should equals number of limit as dummy json does not contain page keyword for pagination
function Home() {
  const dispatch = useDispatch();
  //   const [page, setPage] = useState(0);
  // const [productsList, seproductsList] = useState([]);
  // const [pagination, setPagination] = useState({});

  const { productsList, pagination } = useSelector(({ products }) => products);

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

    dispatch(getProductsThunk());
  };

  //   const [isLoading, setILoading] = useInfiniteScroll(fetchData);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {productsList?.map((product) => (
        <div>
          <button onClick={() => handleAddToCart(product)}>add to cart</button>
          <Link key={product.id} to={`/products/${product.id}`}>
            <p
              style={{
                background: "gray",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              {`${product.id}-${product.title}`}
            </p>
          </Link>
        </div>
      ))}
      {/* {isLoading && pagination?.total >= productsList?.length && (
        <p>loading.........</p>
      )} */}
      {/* {pagination?.total === productsList?.length && (
        <p style={{ fontWeight: "bold" }}>
          you reached the end of the results {pagination?.total}{" "}
          {productsList?.length}
        </p>
      )} */}
    </div>
  );
}

export default Home;
