import { useSelector } from "react-redux";
import Header from "./Header";
import GptSearchPage from "./GPT Search Page/GptSearchPage";
import Hero from "./Main Container/Hero";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";
import useNowPlaying from "./Hooks/useNowPlaying";
import useTopRated from "./Hooks/useTopRated";
import usePopularMovies from "./Hooks/usePopularMovies";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import useTopRatedShows from "./Hooks/useTopRatedShows";
import usePopularShows from "./Hooks/usePopularShows";
import useOnAirShows from "./Hooks/useOnAirShows";
import useArrivingTodayShows from "./Hooks/useArrivingTodayShows";

const Browse = () => {
  const toggleGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
      {toggleGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <Hero />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
