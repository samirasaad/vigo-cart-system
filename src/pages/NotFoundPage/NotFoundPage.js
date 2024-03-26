import { Link } from "react-router-dom";
import { NotFound } from "./../../utils/images";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className=" not-found-wrapper d-flex flex-column justify-content-center align-items-center">
      <div>
        <img src={NotFound} alt="not-found-icon" className="not-found-icon" />
        <p className="text-white">Page not found</p>
        <Link to="/">
          <button className="primary-btn primar-gradient m-auto">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
