import { useEffect } from "react";
import { ON_AIR_SHOWS, OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addOnAirShows } from "../../utils/store/showsSlice";

const useOnAirShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getOnAirShows();
  }, []);

  const getOnAirShows = async () => {
    const response = await fetch(ON_AIR_SHOWS, OPTIONS);
    const json = await response.json();

    dispatch(addOnAirShows(json.results));
  };
};

export default useOnAirShows;
