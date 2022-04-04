import React, {useEffect} from "react";
import "./Pagination.css";

const Pagination = ({ housePerPage, totalHouseList, paginate }) => {

  //Empty array to contain number of pages
  const pageNumbers = [];

  //Determine the number of pages based on the length of the data.js(12) file divided by the housePerPage(6) and push the answer into the empty pageNumbers array
  for (let i = 1; i <= Math.ceil(totalHouseList / housePerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumbers]);

  return (
    <nav className="pagination__container">
      {/* Loop through the pageNumbers array and display the data */}
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="page__link"
          >
            {number}
          </li>
        );
      })}
    </nav>
  );
};

export default Pagination;
