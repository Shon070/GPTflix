import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const shows = useSelector((store) => store.shows);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList
          title={"TV SHOWS - Top Rated Shows"}
          movies={shows.topRatedShows}
        />
        <MovieList title={"Popular"} movies={shows.popularShows} />
        <MovieList title={"On The Air"} movies={shows.onAirShows} />
        <MovieList title={"Arriving Today"} movies={shows.arrivingTodayShows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
