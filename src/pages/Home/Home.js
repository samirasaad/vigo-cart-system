import { Link } from "react-router-dom";
import LottieReact from "../../components/LottieReact/LottieReact";
import animationData from "./../../utils/lotties/woman-shopping-online.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="home-wrapper">
      <LottieReact defaultOptions={defaultOptions} width={300} height={300} />
      <Link to="/products">
        <button className="primary-btn primar-gradient m-auto">
          discover products
        </button>
      </Link>
    </div>
  );
};

export default Home;
