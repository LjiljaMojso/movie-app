import React from "react";

import Search from "./components/Search";
import MovieList from "./components/MovieList";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import SearchResultsList from "./components/SearchResultsList";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(true);
  const [results, setResults] = useState([]);
  const handleClose = (e) => {
    setResults([]);
  };
  const searchMovie = (string) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5b21e1113af02bf461ef9d53c7bcfe35&language=en-US&page=1&include_adult=false&query=${string}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.filter((item) => {
          return (
            string &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(string)
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  //save Movie in firebase
  const saveMovieInFirebase = async (title, id, img, overview, date) => {
    await addDoc(collection(db, "movieWatchList"), {
      title,
      id,
      img: `https://image.tmdb.org/t/p/w200/${img}`,
      overview,
      watched: false,
      date,
    });
  };
  //fanction for watched movie
  const editMovie = async (id, watched) => {
    await updateDoc(doc(db, "movieWatchList", id), {
      id,
      watched: !watched,
    });
  };
  //delete movie from firebase
  const deleteMovie = async (id) => {
    await deleteDoc(doc(db, "movieWatchList", id));
  };
  useEffect(() => {
    const q = query(collection(db, "movieWatchList"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let moviesArray = [];
      querySnapshot.forEach((doc) => {
        moviesArray.push({ ...doc.data(), id: doc.id });
      });
      setMovies(moviesArray);
    });
    return () => unsubscribe;
  }, [movies]);

  return (
    <div>
      <Search searchMovie={searchMovie} />
      {results.length > 0 && (
        <SearchResultsList
          results={results}
          saveMovieInFirebase={saveMovieInFirebase}
          handleClose={handleClose}
        />
      )}

      {showMovies ? (
        <MovieList
          movies={movies}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
        />
      ) : (
        <p>You do not have any movies to show</p>
      )}
    </div>
  );
};

export default App;
