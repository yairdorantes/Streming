import { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { api } from "../../api";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(`${api}/movies`)
      .then((res) => {
        console.log(res.data.movies);
        setMovies(res.data.movies);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="flex flex-wrap mx-auto gap-4 container justify-center">
      {movies.map((movie, i) => (
        <MovieCard data={movie} key={i} />
      ))}
    </div>
  );
};

export default MovieContainer;
