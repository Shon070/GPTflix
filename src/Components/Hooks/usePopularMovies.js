import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_MOVIES } from "../../utils/constants";
import { addPopularMovies } from "../../utils/store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES, OPTIONS);
    const json = await response.json();

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
