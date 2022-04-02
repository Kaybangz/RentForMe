import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { data } from "../../Data/Data";
import "./SingleDisplay.css";
import {
  BsStarHalf,
  BsStarFill,
  BsCheck2Circle
} from "react-icons/bs";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";
import DatePicker from "../DatePicker/DatePicker";
import FramerAnimation from "../Animation/FramerAnimation";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

const SingleDisplay = ({ active, handleBookmarked, bookmarked }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agentFee = 30;

  //Using the useParams react-router hook to get the id of the selected item
  const { id } = useParams();

  //State for managing the data that would be display in this component
  const [houseData, setHouseData] = useState(null);

  //if the id of the selected item is in the data.js file, then that item would be displayed in this component
  useEffect(() => {
    let house = data.find((home) => home.id === parseInt(id));

    //if the house item is contained in the data.js file, pass in into the houseData useState hook
    if (house) {
      setHouseData(house);
    }
  }, [id]);

  //Setting the react calender date
  const [value, onChange] = useState(new Date());

  // let startMonth = value[0].toLocaleString('default', {month: 'long'});
  // let endMonth = value[1].toLocaleString('default', {month: 'long'});

  //Setting the min date
  const minDate = new Date();

  //Calculating the date range
  let numOfDays = ((value[0] - value[1]) / -86399999).toFixed(0) - 0;

  //State for handling the date range select error
  const [isError, setIsError] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  //function for the the "book now" button
  const bookHouseHandler = () => {
    if (isNaN(value[0] - value[1])) {
      setIsError(true);
    } else {
      setIsError(false);
      setShowDetails(true);
    }
  };

  return (
    <FramerAnimation>
      <>
        <GoBackBtn/>

        {houseData ? (
          <main className="home__wrapper">
            <section className="home__container">
              <div className="main">
                <h1 className="houseName__header">{houseData.name}</h1>
                <div className="cover__img">
                  <img
                    src={houseData.cover}
                    className="cover"
                    alt={houseData.name}
                  />
                </div>
                <div className="sub__images">
                  {houseData.images.map((image) => {
                    return <img src={image} alt={image} />;
                  })}
                </div>

                <section className="price__bookmark">
                  <h2>${houseData.price} / night</h2>
                  <div className="bookmark__icon">
                    <button
                      className={
                        active ? "bookmark_btn_active" : "bookmark__btn"
                      }
                      onClick={() => handleBookmarked(houseData)}
                    >
                      {active ? (
                        <AiFillHeart />
                      ) : (
                        <AiOutlineHeart style={{ color: "rgb(119, 5, 26)" }} />
                      )}
                    </button>
                  </div>
                </section>

                <p>{houseData.description}</p>

                <div className="host__section">
                  <img src={houseData.avatar} alt={houseData.host} />
                  <h1>Uploaded by {houseData.host}</h1>
                </div>

                <div className="house__address">
                  <h1>
                    <span>
                      <GrLocationPin />
                    </span>
                    {houseData.address}
                  </h1>
                </div>

                <div className="host__number">
                  <h1>
                    <span>
                      <BiPhoneCall />
                    </span>
                    +{houseData.phoneNumber}
                  </h1>
                </div>
              </div>

              <aside className="sidebar">
                <section>
                  <h4 className="amenities">Amenities</h4>
                  {houseData.amenities.map((amenity) => {
                    return (
                      <li>
                        <BsCheck2Circle className="amenity__icon" />
                        {amenity}
                      </li>
                    );
                  })}
                </section>

                <h3 className="review__header">
                  {houseData.reviews < 5.0 ? (
                    <BsStarHalf className="review__icon" />
                  ) : (
                    <BsStarFill className="review__icon" />
                  )}
                  {houseData.reviews} review ratings
                </h3>

                <section className="booking__container">
                  <h2
                    style={{
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Enter rent period &darr;
                  </h2>
                  <DatePicker
                    value={value}
                    minDate={minDate}
                    onChange={onChange}
                  />

                  <>
                    {isError ? (
                      <p
                        style={{
                          marginBottom: ".3rem",
                          marginTop: "1rem",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                          borderBottom: "none",
                        }}
                      >
                        You cannot proceed until you select a date range!
                      </p>
                    ) : null}
                  </>

                  <div className="total_cost_alert">
                    {showDetails ? (
                      <div>
                        <p
                          style={{
                            marginTop: "1rem",
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            borderBottom: "none",
                          }}
                        >
                          You have opted to stay for {numOfDays} nights.
                        </p>

                        <p
                          style={{
                            marginTop: ".8rem",
                            fontSize: "1rem",
                            fontWeight: "700",
                            borderBottom: "none",
                          }}
                        >
                          From {value[0].getDate()}{" "}
                          {value[0].toLocaleString("default", {
                            month: "long",
                          })}{" "}
                          {value[0].getFullYear()} to {value[1].getDate()}{" "}
                          {value[1].toLocaleString("default", {
                            month: "long",
                          })}{" "}
                          {value[1].getFullYear()}.
                        </p>

                        <p
                          style={{
                            marginTop: "1rem",
                            marginBottom: "1.5rem",
                            fontSize: "1rem",
                            fontWeight: "700",
                            borderBottom: "none",
                          }}
                        >
                          (Please note that you are required to leave on the
                          morning of {value[1].getDate() + 1}{" "}
                          {value[1].toLocaleString("default", {
                            month: "long",
                          })}{" "}
                          {value[1].getFullYear()}).
                        </p>
                        <h4 className="total_cost_header">
                          Rent: ${houseData.price} * {numOfDays} = $
                          {parseInt(houseData.price) * parseInt(numOfDays)}
                        </h4>

                        <h4>Agent Fee: ${agentFee}</h4>

                        <h4>
                          Total amount: ${agentFee} + $
                          {parseInt(houseData.price) * parseInt(numOfDays)} = $
                          {parseInt(agentFee) +
                            parseInt(houseData.price) * parseInt(numOfDays)}
                        </h4>
                      </div>
                    ) : null}
                  </div>

                  <div className="booking_btn_container">
                    {showDetails ? (
                      <Link to="/proceedToRent" className="proceed__link">
                        <button className="booking__btn">Proceed</button>
                      </Link>
                    ) : (
                      <button
                        onClick={bookHouseHandler}
                        className="booking__btn"
                      >
                        Rent now
                      </button>
                    )}
                  </div>
                </section>
              </aside>
            </section>
          </main>
        ) : null}
      </>
    </FramerAnimation>
  );
};

export default SingleDisplay;
