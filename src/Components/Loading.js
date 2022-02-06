import React from "react";
import spinner from "../assets/spinner.gif";

const Loading = () => {
  return (
    <>
      <h2 className="text-center" style={{ width: "100%" }}>
        <img src={spinner} alt="spinner" />
      </h2>
    </>
  );
};

export default Loading;
