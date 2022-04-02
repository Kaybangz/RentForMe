import React from "react";
import FramerAnimation from "../Animation/FramerAnimation";
import HomeBtn from "../HomeBtn/HomeBtn";
import "./HouseUploadSuccess.css";

const HouseUploadSuccess = () => {
  return (
    <FramerAnimation>
      <HomeBtn />
      <div className="upload__success">
        <h2>
          Your Apartment would be added as soon as we are done reviewing it.
        </h2>
      </div>
    </FramerAnimation>
  );
};

export default HouseUploadSuccess;
