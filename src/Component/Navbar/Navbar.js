import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="linkClass">
          <Link to="/">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/512/889/889199.png?w=740&t=st=1690458575~exp=1690459175~hmac=02a5ac9de439c8f3c536510d20595142fcb0a0deed5509864a209bacc014e923"
              alt="Error"
              width="80"
              height="80"
            />
          </Link>
          <Link to="/movies/popular">
            <span className="section-span">Popular</span>
          </Link>
          <Link to="/movies/top_rated">
            <span className="section-span">Top Rated</span>
          </Link>
          <Link to="/movies/upcoming">
            <span className="section-span">Upcoming</span>
          </Link>
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
