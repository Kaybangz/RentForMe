import React, { useState } from "react";
import { data } from "../../Data/Data";
import HomeAnimation from "../Animation/HomeAnimation";
import EmptyList from "./EmptyList/EmptyList";
import Header from "./Header/Header";
import HouseList from "./HouseList/HouseList";
import Pagination from "./Pagination/Pagination";

const MainDisplay = ({ handleBookmarked, bookmarked, deleteHandler }) => {
  //State containing the data fetched from data.js file
  const [houseData, setHouseData] = useState(data);

  //PAGINATION FEATURE
  //State for managing the current page
  const [currPage, setCurrPage] = useState(1);
  //Number of houses to be displayed per page, the value is 6
  const [housePerPage] = useState(6);

  //Getting the index of the last list
  const indexOfLastList = currPage * housePerPage;
  //Getting the index of the first list
  const indexOfFirstList = indexOfLastList - housePerPage;

  //State for managing the data that would displayed on the houseList component
  const currentData = houseData.slice(indexOfFirstList, indexOfLastList);

  //Function for setting the page number
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  //State for managing the value of the search input
  const [searchKey, setSearchKey] = useState("");

  //Call the handleSearch function inside the handleSearch on pass it to the onclick attribute
  const handleSearch = (e) => {
    e.preventDefault();

    handleSearchResults();
  };

  //Search for house(s) by state
  const handleSearchResults = () => {
    const houseList = data;

    const filteredLists = houseList.filter((house) =>
      house.state.toLowerCase().includes(searchKey.toLowerCase())
    );

    setHouseData(filteredLists);
  };

  //Clear Search
  const handleClearSearch = () => {
    setHouseData(data);
    setSearchKey("");
  };

  return (
    // HomeAnimation component for framer motion animation
    <HomeAnimation>
      <div>
        {/* Header section */}
        <Header
          searchValue={searchKey}
          handleClearSearch={handleClearSearch}
          submitSearch={handleSearch}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* House listing section */}
        {!houseData.length ? <EmptyList/> : (
          <HouseList
            houses={currentData}
            handleBookmarked={handleBookmarked}
            bookmarked={bookmarked}
            deleteHandler={deleteHandler}
            housePerPage={housePerPage}
            totalHouseList={houseData.length}
          />
        )}

        {/* Pagination section */}
        <Pagination
          totalHouseList={houseData.length}
          housePerPage={housePerPage}
          paginate={paginate}
        />
      </div>
    </HomeAnimation>
  );
};

export default MainDisplay;
