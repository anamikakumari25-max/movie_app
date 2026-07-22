import React from "react";

function MovieCard({ allMovieData, loading }) {
  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10 font-bold">
        Loading...
      </h2>
    );
  }

  if (allMovieData.length === 0) {
    return (
      <h2 className="text-center text-xl mt-10">
        No Movies Found
      </h2>
    );
  }

  return (
    <div className="flex flex-wrap px-4 lg:px-10">
      {allMovieData.map((movie) => (
        <div
          key={movie.imdbID}
          className="p-2 lg:w-1/4 md:w-1/2 w-full"
        >
          <div className="bg-[#002e4b] p-3 rounded-2xl h-full">

            <img
              className="w-full h-80 object-cover rounded-lg mb-3"
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://dummyimage.com/300x450"
              }
              alt={movie.Title}
            />

            <h2 className="text-white text-xl font-bold">
              {movie.Title}
            </h2>

            <p className="text-gray-300 mt-2">
              Year : {movie.Year}
            </p>

            <p className="text-gray-300">
              Type : {movie.Type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;