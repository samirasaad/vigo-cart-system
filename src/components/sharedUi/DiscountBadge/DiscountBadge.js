import "./DiscountBadge.scss";

const DiscountBadge = ({ discountPercentage }) => {
  return (
    <div class="dis-ribbon">
      <span>{`${discountPercentage} %`}</span>
    </div>
  );
};

export default DiscountBadge;
