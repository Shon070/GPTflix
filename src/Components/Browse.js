import Header from "./Header";
import useNowPlaying from "./Hooks/useNowPlaying";
import Hero from "./Main Container/Hero";
import SecondaryContainer from "./Secondary Container/SecondaryContainer";

const Browse = () => {
  useNowPlaying();
  return (
    <>
      <Header />
      <Hero />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
