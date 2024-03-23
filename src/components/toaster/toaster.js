const Toaster = ({ msg, type }) => {
  return (
    <p
      style={{
        position: "fixed",
        bottom: "0",
        background: `${type === "success"} ` ? "green" : "red",
      }}
    >
      {msg}
    </p>
  );
};

export default Toaster;
