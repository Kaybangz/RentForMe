import React from "react";
import HomeAnimation from "../Animation/HomeAnimation";
import "./Bookmarked.css";
import { Link, Params, useParams } from "react-router-dom";

const Bookmarked = ({ bookmarked, deleteHandler }) => {
  return (
    <HomeAnimation>
      <section>
        <div className="bookmark__wrapper">
          {bookmarked.map((item) => {
            return (
              <div key={item.id} className="bookmark__container">
                <img src={item.cover} alt={item.name} />
                <Link to={`/rent/${item.id}`} className="bookmark__link">
                  <p>{item.name}</p>
                </Link>
                <span onClick={() => deleteHandler(item)}>x</span>
              </div>
            );
          })}
        </div>
      </section>
    </HomeAnimation>
  );
};

export default Bookmarked;
