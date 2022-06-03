import React from "react";
import "./Bookmarked.css";
import { Link } from "react-router-dom";
import BookmarkAnimation from "../Animation/BookmarkAnimation";

const Bookmarked = ({ bookmarked, deleteHandler }) => {
  return (
    <BookmarkAnimation>
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
      </BookmarkAnimation>
  );
};

export default Bookmarked;
