import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import SingleDisplay from "./components/SingleDisplay/SingleDisplay";
import { data } from "./Data/Data";
import BackToTop from "./components/BackToTopBtn/BackToTop";
import LandLordForm from "./components/LandLordForm/LandLordForm";
import { RentForm } from "./components/RentForm/RentForm";
import RentingSuccess from "./components/RentingSuccess/RentingSuccess";
import HouseUploadSuccess from "./components/HouseUploadSuccess/HouseUploadSuccess";


const App = () => {
  //State for managing bookmark button behaviour
  const [active, setActive] = useState(false);

  // Creating an empty array to hold the bookmarked houses
  const [bookmarked, setBookmarked] = useState([]);

  // Function to add house to the bookmarked array
  const handleBookmarked = (houseData) => {
    let existInBookmark = bookmarked.find((item) => item.id === houseData.id);

    if (!existInBookmark) {
      setBookmarked([...bookmarked, { ...houseData }]);
    }

    const isActive = setActive(!active);

    setTimeout(() => {
      setActive(active);
    }, 500);
  };

  //Saving bookmarked houses to local storage
  useEffect(() => {
    const bookmarked = localStorage.getItem("bookmarked");

    if (bookmarked) {
      setBookmarked(JSON.parse(bookmarked));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked]);

  //Delete items from the bookmarked array
  const deleteHandler = (house) => {
    const existInBookmark = bookmarked.filter((item) => item.id !== house.id);

    setBookmarked(existInBookmark);
  };

  const location = useLocation();

  return (
    <main className="main__wrapper">
      <section className="container">
          <Routes>
            <Route
              path="/"
              element={
                <MainDisplay
                  bookmarked={bookmarked}
                  deleteHandler={deleteHandler}
                />
              }
            />
            <Route
              path="/rent/:id"
              element={
                <SingleDisplay
                  bookmarked={bookmarked}
                  handleBookmarked={handleBookmarked}
                  active={active}
                />
              }
            />

            <Route path="/landLordForm" element={<LandLordForm />} />
            <Route path="/proceedToRent" element={<RentForm />} />
            <Route path="/RentingSuccess" element={<RentingSuccess />} />
            <Route path="/HouseUploadSuccess" element={<HouseUploadSuccess/>} />
          </Routes>
    
      </section>
      <BackToTop />
    </main>
  );
};

export default App;
