import React from "react";

const Loader = () => {
  return (
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "50%",
        left: "50%",
      }}
    >
      loading..................
    </p>
  );
};

export default Loader;
