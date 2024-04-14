import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieTrailer from "./MovieTrailer";

const Hero = () => {
  const subscribe = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!subscribe) return;

  const movie = subscribe[0];
  const { overview, id } = movie;

  return (
    <>
      <MovieTitle description={overview} />
      <MovieTrailer id={id} />
    </>
  );
};

export default Hero;
