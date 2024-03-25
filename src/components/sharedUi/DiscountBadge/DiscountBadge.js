import "./DiscountBadge.scss";

const DiscountBadge = ({ discountPercentage, className }) => {
  return (
    <div class="dis-ribbon">
      <span className={className}>{`${discountPercentage} %`}</span>
    </div>
  );
};

export default DiscountBadge;
