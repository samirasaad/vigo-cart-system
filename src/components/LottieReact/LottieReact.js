import Lottie from "react-lottie";

const LottieReact = ({ defaultOptions, width, height }) => {
  return <Lottie options={defaultOptions} height={width} width={height} />;
};

export default LottieReact;
