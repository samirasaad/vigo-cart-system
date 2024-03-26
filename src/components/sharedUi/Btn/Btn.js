const Btn = ({ handleClick, content, type, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={className}
    >
      {content}
    </button>
  );
};

export default Btn;
