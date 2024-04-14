import { useEffect } from "react";
import { OPTIONS, TOP_RATED_MOVIES } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/store/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  });

  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_MOVIES, OPTIONS);
    const json = await response.json();

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRated;
