import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Component/Navbar/Navbar";
import Details from "./Component/MovieDetails/Details";
import Carosel from "../src/Component/Carosel/Carosel";
import List from "./Component/MovieList/List";
import Social from "./Component/Social/Social";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carosel />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="movies/:type" element={<List />} />
          <Route path="/*" element={<h1>error</h1>} />
        </Routes>
        <Social />
      </BrowserRouter>
    </div>
  );
}
export default App;
