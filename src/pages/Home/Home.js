import { Link } from "react-router-dom";
import LottieReact from "../../components/LottieReact/LottieReact";
import animationData from "./../../utils/lotties/woman-shopping-online.json";
import Btn from './../../components/sharedUi/Btn/Btn';

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
    <div className="home-wrapper container d-flex flex-column justify-content-center align-items-center">
      <LottieReact defaultOptions={defaultOptions} width={300} height={300} />
      <Link to="/products">
        <Btn
          content=" Discover products"
          className="primary-btn primar-gradient m-auto"
        />
      </Link>
    </div>
  );
};

export default Home;
