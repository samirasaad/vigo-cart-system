import { Toast } from "react-bootstrap";
import { showToaster } from "../../store/featuresSlices/toaster";
import { useDispatch } from "react-redux";
import "./toaster.scss";

const Toaster = ({ isToasterDisplayed, msg, type }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log(isToasterDisplayed);
    dispatch(showToaster({ isToasterDisplayed: false }));
  };
  return (
    <div>
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
    </div>
  );
};

export default Toaster;
