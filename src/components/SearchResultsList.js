import React from "react";
import MovieListItem from "./MovieListItem";
const SearchResultsList = ({ results, saveMovieInFirebase, handleClose }) => {
  return (
    <div className="searchList">
      {results.length > 0 && (
        <ul id="searchList">
          {results.map((item) => {
            return (
              <MovieListItem
                item={item}
                key={item.id}
                saveMovieInFirebase={saveMovieInFirebase}
                handleClose={handleClose}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchResultsList;
