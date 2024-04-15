import { BACKGROUND_PHOTO } from "../../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={BACKGROUND_PHOTO}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
