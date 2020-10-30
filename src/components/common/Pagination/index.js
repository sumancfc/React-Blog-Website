import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='row'>
      <div className='col-md-12'>
        <nav aria-label='Page navigation'>
          <ul className='pagination justify-content-start'>
            {pageNumbers.map((number) => (
              <li key={number} className='page-item'>
                <Link
                  className='page-link'
                  to={`/page/${number}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
