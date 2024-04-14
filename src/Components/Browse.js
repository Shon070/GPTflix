import Header from "./Header";
import useArrivingTodayShows from "./Hooks/useArrivingTodayShows";
import useNowPlaying from "./Hooks/useNowPlaying";
import useOnAirShows from "./Hooks/useOnAirShows";
import usePopularMovies from "./Hooks/usePopularMovies";
import usePopularShows from "./Hooks/usePopularShows";
import useTopRated from "./Hooks/useTopRated";
import useTopRatedShows from "./Hooks/useTopRatedShows";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import Hero from "./Main Container/Hero";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  useTopRatedShows();
  useOnAirShows();
  usePopularShows();
  useArrivingTodayShows();
  return (
    <>
      <Header />
      <Hero />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
