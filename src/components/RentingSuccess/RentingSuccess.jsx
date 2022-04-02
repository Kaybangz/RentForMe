import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import FramerAnimation from "../Animation/FramerAnimation";
import HomeBtn from "../HomeBtn/HomeBtn";
import "./RentingSuccess.css";

const RentingSuccess = () => {
  return (
    <FramerAnimation>
      <HomeBtn />
      <div className="renting__success">
        <AiOutlineCheckCircle className="success__icon" />
        <h2>You have successfully rented this apartment!</h2>
      </div>
    </FramerAnimation>
  );
};

export default RentingSuccess;
