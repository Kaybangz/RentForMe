import React from "react";
import { BsSearch, BsFillHouseFill } from "react-icons/bs";
import "./Header.css";
import { Link } from "react-router-dom";

//Consist of the logo, the searchbar and button for the "Upload your house"

//Destructured all the props for the searchBar
const Header = ({
  searchValue,
  handleClearSearch,
  submitSearch,
  handleSearchKey,
}) => {
  return (
    <header>
      <nav>
        <section className="header">
          <div>
            <h1>RentForMe</h1>
            <h3>Find your dream home today...</h3>
          </div>

          <Link to="/landLordForm" className="landLord_form_btn">
            <div>
              <span>
                <p>Upload your house</p>
                <BsFillHouseFill className="landLord__icon" />
              </span>
            </div>
          </Link>

        </section>
        <div className="searchBar__container">
          <form onSubmit={submitSearch}>
            <input
              type="text"
              placeholder="Search house(s) by state..."
              value={searchValue}
              onChange={handleSearchKey}
            />
            {searchValue && (
              <span className="clearSearch" onClick={handleClearSearch}>
                X
              </span>
            )}

            <button>
              <BsSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
