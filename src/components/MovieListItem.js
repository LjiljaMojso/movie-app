function MovieListItem({ item, saveMovieInFirebase, handleClose }) {
  return (
    <div key={item.id}>
      <li>
        <span> {item.title} </span>
        <button
          variant="light"
          onClick={() => {
            handleClose();
            saveMovieInFirebase(
              item.title,
              item.id,
              item.poster_path,
              item.overview,
              item.release_date
            );
          }}
        >
          Save on the WatchList
        </button>
      </li>
    </div>
  );
}

export default MovieListItem;
