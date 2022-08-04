import React from "react";
import Lottie from "react-lottie";
import "./Preloader.css";
import * as dots from "./97930-loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dots.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Preloader() {
  return (
    <div className="loader">
      <div className="title">
        <h2>memories</h2>
      </div>
      <div className="icon">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default Preloader;
