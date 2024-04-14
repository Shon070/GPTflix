import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white font-semibold py-3 ">{title}</h1>
      <div className="flex hover:overflow-x-scroll custom-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                name={movie.original_title}
              />
            ))}
        </div>
      </div>

      <style>
        {`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #888 transparent;
            overflow-y: hidden;
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default MovieList;
