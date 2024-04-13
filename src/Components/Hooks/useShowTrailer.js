import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/store/movieSlice";
import { OPTIONS } from "../../utils/constants";

const useShowTrailer = (id) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      OPTIONS
    );
    const json = await response.json();

    const filteredData = json?.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useShowTrailer;
