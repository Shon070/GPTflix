import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ARRIVING_TODAY, OPTIONS } from "../../utils/constants";
import { addArrivingTodayShows } from "../../utils/store/showsSlice";

const useArrivingTodayShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getArrivingToday();
  }, []);

  const getArrivingToday = async () => {
    const response = await fetch(ARRIVING_TODAY, OPTIONS);
    const json = await response.json();

    dispatch(addArrivingTodayShows(json.results));
  };
};

export default useArrivingTodayShows;
