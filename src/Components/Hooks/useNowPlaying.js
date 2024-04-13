import { useEffect } from "react";
import { NOW_PLAYING, OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/store/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING, OPTIONS);
    const json = await response.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlaying;
