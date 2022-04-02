import React from "react";
import "./HomeBtn.css";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <Link to="/" className="homeBtn">
      <button className="btn">Home</button>
    </Link>
  );
};

export default HomeBtn;
