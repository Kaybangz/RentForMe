import React from "react";
import FramerAnimation from "../Animation/FramerAnimation";
import HomeBtn from "../HomeBtn/HomeBtn";
import "./RentingSuccess.css";

const RentingSuccess = () => {
  return (
    <FramerAnimation>
      <HomeBtn />
      <div className="renting__success">
        <h2>You have successfully rented this apartment!</h2>
      </div>
    </FramerAnimation>
  );
};

export default RentingSuccess;
