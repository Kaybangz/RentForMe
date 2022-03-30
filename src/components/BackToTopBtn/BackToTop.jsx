import React, { useState, useEffect } from "react";
import "./BackToTop.css";
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisibility(true)
    } 
    else if (scrolled <= 300){
      setVisibility(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisibility);

  return (
    <button className="backToTop" onClick={scrollToTop}>
      <BsArrowUpCircleFill className="backToTop__icon" style={{display: visibility ? 'block' : 'none'}} />
    </button>
  );
};

export default BackToTop;
