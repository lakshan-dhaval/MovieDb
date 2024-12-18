import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card/Card";
import "./List.css";
import axios from "axios";

const APIURL =
  "https://api.themoviedb.org/3/movie/type?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=c45a857c193f6302f2b5061c3b85e743&query=";

const List = () => {
  const { type } = useParams();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    const apiUrl = type
      ? `https://api.themoviedb.org/3/movie/${type}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`
      : APIURL;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [type, search]);

  return (
    <div className="movie_list">
      <div class="first">
        <input
          value={search}
          onChange={changeSearch}
          type="search"
          placeholder="Search..."
        />
      </div>
      <h2 className="list_title">
        {(type ? type : "")}
      </h2>
      <div className="list_cards">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default List;
