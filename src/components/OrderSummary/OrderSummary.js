import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { calculateSubtotal, calculateTotalPrice } from "../../utils/shared";
import Btn from "../sharedUi/Btn/Btn";
import "./OrderSummary.scss";

const OrderSummary = ({ cartItems }) => {
  const [applyDiscount, setApplyDiscount] = useState(false);
  const [discountStr, setDiscountStr] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountPercentageErr, setDiscountPercentageErr] = useState("");
  const shipping = 20;
  const taxes = 20;

  useEffect(() => {
    if (discountStr) {
      setDiscountPercentageErr(
        discountStr === "abc"
          ? ""
          : discountStr === "abcd"
          ? ""
          : discountStr === "abcde"
          ? ""
          : "Invalid code"
      );
      setDiscountPercentage(
        discountStr === "abc"
          ? 15
          : discountStr === "abcd"
          ? 20
          : discountStr === "abcde"
          ? 30
          : 0
      );
    }
  }, [discountStr]);

  const handleDiscountpercentage = (e) => {
    setDiscountStr(e.target.value);
    setApplyDiscount(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!discountPercentageErr) {
      calculateTotalPrice(cartItems, applyDiscount, {
        shipping,
        taxes,
        discountPercentage,
      });
    }
    setDiscountStr(null);
    document.getElementById("code").value = "";
  };

  return (
    <div className="summary-wrapper p-3">
      {cartItems && (
        <p className="small bold-font">{`Sub-total : ${calculateSubtotal(
          cartItems
        )} $`}</p>
      )}
      <p className="small bold-font">Shipping : {`${shipping} $`} </p>
      <p className="small bold-font">Taxes :{`${taxes} $`} </p>
      <form onSubmit={handleSubmit}>
        <p className="small bold-font">Discount Codes</p>
        <div>
          <p>
            <small>
              1- <span className="secondary-text bold-font">abc</span> will give
              15 %
            </small>
          </p>
          <p>
            <small>
              2- <span className="secondary-text bold-font">abcd</span> will
              give 20 %
            </small>
          </p>
          <p>
            <small>
              3- <span className="secondary-text bold-font">abcde</span> will
              give 30 %
            </small>
          </p>
        </div>
        <div className="d-flex">
          <input
            id="code"
            type="text"
            className="discount-code w-75"
            value={discountStr}
            onChange={handleDiscountpercentage}
          />
          <Btn
            content="Apply"
            className="text-white px-2 py-1 apply-code bg-success mx-2"
            handleClick={() => setApplyDiscount(true)}
          />
        </div>
        {discountPercentageErr && (
          <p className="mb-0 text-danger">{discountPercentageErr}</p>
        )}
      </form>
      <hr />
      {cartItems && (
        <h4 className="bold-font">{`Total : ${calculateTotalPrice(
          cartItems,
          applyDiscount,
          {
            shipping,
            taxes,
            discountPercentage,
          }
        )}`}</h4>
      )}
      <div className="d-flex flex-column">
        <Btn
          content="Proceed to checkout"
          className="primary-btn primar-gradient m-auto"
        />
        <Link
          to="/products"
          className="secondary-btn m-auto my-2 continue-shopping-btn"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
