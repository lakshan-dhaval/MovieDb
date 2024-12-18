import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LoadingPage: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ LoadingPage: false });
    }, 2000);
  }

  render() {
    const { movie } = this.props;
    const { LoadingPage } = this.state;
    return (
      <div>
        {LoadingPage ? (
          <div className="card">
            <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton height={300} duration={3} />
            </SkeletonTheme>
          </div>
        ) : (
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
                className="card-Img"
                alt="failed to load"
              />
              <div className="card-details">
                <div className="card-title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="card-relasedate">
                  {movie ? movie.release_date : ""}
                  <span className="card-Ratings">
                    {movie ? movie.vote_average : ""}
                  </span>
                </div>
                <div className="card-discription">
                  {movie ? movie.overview.slice(0, 120) + "..." : ""}
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default Card;
