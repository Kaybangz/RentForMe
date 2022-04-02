import React from "react";
import "./HomeBtn.css";
import { useNavigate } from "react-router-dom";

const HomeBtn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="homeBtn">
      <button onClick={goBack} className="btn">Home</button>
    </div>
  );
};

export default HomeBtn;
