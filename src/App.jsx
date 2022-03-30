import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import SingleDisplay from "./components/SingleDisplay/SingleDisplay";
import Bookmarked from "./components/Bookmarked/Bookmarked";
import { data } from "./Data/Data";
import BackToTop from "./components/BackToTopBtn/BackToTop";
import DatePicker from "./components/DatePicker/DatePicker";
import LandLordForm from "./components/LandLordForm/LandLordForm";
import { AnimatePresence } from "framer-motion";

const App = () => {
  //State for managing bookmark button behaviour
  const [active, setActive] = useState(false);

  // Creating an empty array to hold the bookmarked houses
  const [bookmarked, setBookmarked] = useState([]);

  // State to toggle the bookmark button i.e do and undo bookmark function
  const [isAdded, setIsAdded] = useState(false);

  // Function to add house to the bookmarked array
  const handleBookmarked = (houseData) => {
    let house = data.find((item) => (item.id = houseData.id));
    let existInBookmark = bookmarked.find((item) => item.id === houseData.id);

    if (house && !existInBookmark) {
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
  });

  //Delete items from the bookmarked array
  const deleteHandler = (house) => {
    const existInBookmark = bookmarked.filter((item) => item.id !== house.id);

    setBookmarked(existInBookmark);
  };

  const location = useLocation();

  return (
    <main>
      <section className="container">
        
          <Routes key={location.pathname} location={location}>
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
          </Routes>

      </section>
      <BackToTop />
    </main>
  );
};

export default App;
