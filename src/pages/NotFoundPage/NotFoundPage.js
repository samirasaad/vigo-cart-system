import { Link } from "react-router-dom";
import { NotFound } from "./../../utils/images";
import Btn from "../../components/sharedUi/Btn/Btn";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className=" not-found-wrapper d-flex flex-column justify-content-center align-items-center">
      <div>
        <img src={NotFound} alt="not-found-icon" className="not-found-icon" />
        <p className="text-white text-center">Page not found</p>
        <Link to="/">
          <Btn
            content="Go to home"
            className="primary-btn primar-gradient m-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
