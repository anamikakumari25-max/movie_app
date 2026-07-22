
import React from "react";

function SearchBar({
  searchMovie,
  setSearchMovie,
  fetchMovieDate,
}) {
  return (
    <div className="flex justify-center py-6">
      <input
        type="text"
        placeholder="Search Movie..."
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className="w-80 px-3 py-2 border rounded-l-lg outline-none bg-gray-300"
      />

      <button
        onClick={fetchMovieDate}
        className="bg-[#40407a] text-white px-5 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;