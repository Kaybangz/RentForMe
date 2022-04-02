import React from "react";
import "./GoBackBtn.css";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="goBackBtn">
      <button onClick={goBack} className="btn">Go back</button>
    </div>
  );
};

export default GoBackBtn;