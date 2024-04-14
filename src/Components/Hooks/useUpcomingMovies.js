import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, UPCOMING_MOVIES } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES, OPTIONS);
    const json = await response.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
