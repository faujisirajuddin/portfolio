import React from "react";
import { NavLink } from "react-router-dom";
import error from "../images/error.gif";
import animationData from "../images/Lotties/Notfound.json";
import Lottie from "lottie-react";

const NotFound = () => {
  return (
    <div className="Error-container">
      <div className="error">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <span>404</span>
      <span>
        Sorry The Page you are trying to Access is either unavailable or not
        found
      </span>
      <NavLink to="/">
        <button className="back">Go Back</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
