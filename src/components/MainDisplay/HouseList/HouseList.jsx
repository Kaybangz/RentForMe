import React, {useEffect} from "react";
import "./HouseList.css";
import { Link } from "react-router-dom";
import Bookmarked from "../../Bookmarked/Bookmarked";
import { VscLocation } from "react-icons/vsc";

//Destructured the various props gotten from the mainDisplay component to utilize them here 
const HouseList = ({ houses, bookmarked, deleteHandler }) => {
  return (
    <div className="wrapper">
      {/* The bookmarked data gotten from the Bookmarked component */}
      <Bookmarked bookmarked={bookmarked} deleteHandler={deleteHandler} />
      <div className="main__container">
        {/* Looping through the destructured houses prop to display the various property values */}
        {houses.map((house) => {
          return (
            <div key={house.name} className="house__container">
              <img
                src={house.cover}
                alt={house.name}
                className="cover__image"
              />
              <h1>{house.name}</h1>

              <h2>${house.price}/night</h2>
              <div className="host__container">
                <h3>House owner is {house.host}</h3>
                <img src={house.avatar} alt={house.host} className="avatar" />
              </div>
              <p className="description">{house.description}</p>

              <div className="location__header">
                <VscLocation className="icon"/>
                <h4>{house.state}</h4>
              </div>

              {/* See more button */}
              <Link className="single_display_link" to={`/rent/${house.id}`}>
                <button>See more</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HouseList;
