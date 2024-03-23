import { useEffect, useState } from "react";
import { axiosInstance } from "./../../axios/axiosInstance";
import useInfiniteScroll from "./../../hooks/UseInfinteScroll";

// skip => should equals number of limit as dummy json does not contain page keyword for pagination
function Home() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchData = async () => {
    try {
      if (pagination?.total !== products.length) {
        setILoading(true);
        const res = await axiosInstance.get(
          `/products?limit=30&skip=${page}&delay=1500`
        );
        console.log(res);
        if (res) {
          setILoading(false);
          setPage(page + 30);
          setProducts((prevProducts) => [
            ...prevProducts,
            ...res.data.products,
          ]);
          setPagination({
            skip: res.data.skip,
            total: res.data.total,
            limit: res.data.limit,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isLoading, setILoading] = useInfiniteScroll(fetchData);

  useEffect(() => {
    let mounted = true;
    // if (pagination.total === products.length) {
    //   return;
    // } else if (pagination.total !== products.length && !isLoading) {
    //   fetchData();
    // }
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
      {products?.map((product) => (
        <p
          key={product.id}
          style={{
            background: "gray",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          {`${product.id}-${product.title}`}
        </p>
      ))}
      {isLoading && pagination.total >= products.length && (
        <p>loading.........</p>
      )}
      {pagination.total === products.length && (
        <p style={{ fontWeight: "bold" }}>you reached the end of the results</p>
      )}
    </div>
  );
}

export default Home;
