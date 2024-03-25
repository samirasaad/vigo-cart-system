import LottieReact from "../../components/LottieReact/LottieReact"
import animationData from './../../utils/lotties/woman-shopping-online.json';

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
      <LottieReact defaultOptions={defaultOptions} width={400} height={400}/>
      <button className="primary-btn">discover products</button>
    </div>
  );
};

export default Home;
