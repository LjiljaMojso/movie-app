import React, { useState } from "react";

const Search = ({ searchMovie }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (value) => {
    setSearchTerm(value);
    searchMovie(value);
  };
  return (
    <>
      <header>
        <div className="main-wrapper">
          <div id="header">
            <div className="half">
              <h3 id="logo">My Movie Watchlist</h3>
            </div>

            <div className="half">
              <div id="input-div">
                <input
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => handleChange(e.target.value)}
                />
                <button variant="outline-success">Search</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Search;
