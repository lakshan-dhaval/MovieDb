import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [onGoingMovie, setonGoingMovie] = useState();
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const getData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setonGoingMovie(data));
  }, [id]);

  const getCastData = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const mainCast = data.cast.slice(0, 6);
        setCast(mainCast);
      });
  }, [id]);

  useEffect(() => {
    getData();
    getCastData();
  }, [getData, getCastData]);

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/w500${
            onGoingMovie ? onGoingMovie.backdrop_path : ""
          }`}
          alt=""
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/w500${
                onGoingMovie ? onGoingMovie.poster_path : ""
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {onGoingMovie ? onGoingMovie.original_title : ""}
            </div>
            <div className="movie__tagline">
              {onGoingMovie ? onGoingMovie.tagline : ""}
            </div>
            <div className="movie__rating">
              {onGoingMovie ? onGoingMovie.vote_average : ""}{" "}
              <span className="movie__voteCount">
                {onGoingMovie ? "(" + onGoingMovie.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {onGoingMovie ? onGoingMovie.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {onGoingMovie ? "Release date: " + onGoingMovie.release_date : ""}
            </div>
            <div className="movie__genres">
              {onGoingMovie && onGoingMovie.genres
                ? onGoingMovie.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="Overview">Overview</div>
            <div>{onGoingMovie ? onGoingMovie.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__cast">
        <div className="movie__heading">Cast</div>
        <div className="movie__castList">
          {cast.map((actor) => (
            <div className="movie__actor" key={actor.id}>
              <img
                className="movie__actorImage"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : "https://via.placeholder.com/185x278"
                }
                alt={actor.name}
              />
              <div className="movie__actorName">{actor.name}</div>
              <div className="movie__actorCharacter">{actor.character}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
