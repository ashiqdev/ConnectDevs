import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <Loader
        type="ThreeDots"
        color="#7f8c8d"
        height={100}
        width={100}
        //   timeout={3000}
      />
    </div>
  );
};

export default Spinner;
