import React from "react";
import Movie from "./Movie";
const MovieList = ({ movies, deleteMovie, editMovie }) => {
  return (
    <div className="main-wrapper">
      <h1>Watch List</h1>
      {movies.map((item) => {
        return (
          <Movie
            item={item}
            key={item.id}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
