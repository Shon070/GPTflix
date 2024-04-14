import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED_SHOWS } from "../../utils/constants";
import { addTopRatedShows } from "../../utils/store/showsSlice";

const useTopRatedShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedShows();
  }, []);

  const getTopRatedShows = async () => {
    const response = await fetch(TOP_RATED_SHOWS, OPTIONS);
    const json = await response.json();

    dispatch(addTopRatedShows(json.results));
  };
};

export default useTopRatedShows;
