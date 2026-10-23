import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import MovieCard from "./Components/MovieCard";

function App() {
  const [allMovieData, setallMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieDate = async () => {
    if (!searchMovie.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `https://www.omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
      );

      const data = await res.json();

      setallMovieData(data.Search || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg">

      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        fetchMovieDate={fetchMovieDate}
      />

      <MovieCard
        allMovieData={allMovieData}
        loading={loading}
      />
      </div>
    </div>
  );
}

export default App;