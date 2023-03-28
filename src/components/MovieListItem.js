function MovieListItem({ item, saveMovieInFirebase }) {
  return (
    <div key={item.id}>
      <li>
        <span> {item.title} </span>
        <button
          variant="light"
          onClick={() =>
            saveMovieInFirebase(
              item.title,
              item.id,
              item.poster_path,
              item.overview,
              item.release_date
            )
          }
        >
          Save me on the WatchList
        </button>
      </li>
    </div>
  );
}

export default MovieListItem;
