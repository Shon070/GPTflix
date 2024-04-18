import React, { useState, useEffect } from "react";
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
import LoadingScreen from "./LoadingScreen";

const Browse = () => {
  const toggleGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

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
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {toggleGptSearch ? (
            <GptSearchPage />
          ) : (
            <>
              <Hero />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Browse;
