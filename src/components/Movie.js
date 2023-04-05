import React from "react";

const Movie = ({ item, deleteMovie, editMovie }) => {
  return (
    <div key={item.id} className="movieList">
      <div
        className={
          item.watched
            ? "line-through bg-slate-600 cursor-pointer ml-2 capitalize"
            : null
        }
      >
        <h3 style={{ color: "white" }}>{item.title}</h3>

        {item.img ? (
          <img src={item.img} alt={`${item.title} Poster`} />
        ) : (
          <div>No image</div>
        )}

        <h5>{item.date ? item.date.substring(0, 4) : ""}</h5>
        <p>{item.overview ? item.overview : ""}</p>
      </div>
      <button
        variant="light"
        onClick={() => deleteMovie(item.id)}
        className="deleteButton"
      >
        Delete Movie
      </button>
      <button variant="light" onClick={() => editMovie(item.id, item.watched)}>
        {item.watched ? " Watched" : "To watch"}
      </button>
    </div>
  );
};

export default Movie;
