import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showToaster } from "../../store/featuresSlices/toaster";
import Fade from "react-bootstrap/Fade";
import "./toaster.scss";

const Toaster = ({ isToasterDisplayed, msg, type }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log(isToasterDisplayed);
    dispatch(showToaster({ isToasterDisplayed: false }));
  };
  return (
    <Toast
      className="toatser-wrapper"
      delay={3000}
      autohide
      bg={`${type} `}
      animation={true}
      show={isToasterDisplayed}
      onClose={handleClose}
    >
      <Toast.Body className="text-white bold-font">{msg}</Toast.Body>
    </Toast>
  );
};

export default Toaster;
