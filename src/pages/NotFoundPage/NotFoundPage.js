import { Link } from "react-router-dom";
import { NotFound } from "./../../utils/images";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={NotFound} alt="empty-cart" className="empty-cart-icon" />
      <p className="text-white">Page not found</p>
      <Link to="/">
        <button className="primary-btn primar-gradient m-auto">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
