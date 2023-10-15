import { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import { api } from "../../api";

const MovieContainer = () => {
  const [movies, setMovies] = useState([
    {
      name: "halo",
      image: "https://i.ytimg.com/vi/DyvwxoRtfH0/maxresdefault.jpg",
      location: "https://i.ytimg.com/vi/",
    },
    {
      name: "avengers",
      image:
        "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg",
      location: "https://i.ytimg.com/aveni/",
    },
  ]);
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
