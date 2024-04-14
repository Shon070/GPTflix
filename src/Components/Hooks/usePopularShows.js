import { useEffect } from "react";
import { OPTIONS, POPULAR_SHOWS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularShows } from "../../utils/store/showsSlice";

const usePopularShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularshows();
  }, []);

  const getPopularshows = async () => {
    const response = await fetch(POPULAR_SHOWS, OPTIONS);
    const json = await response.json();

    dispatch(addPopularShows(json.results));
  };
};

export default usePopularShows;
