import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ posterPath, name }) => {
  return (
    <div className="w-48 pr-1 cursor-pointer hover:overflow-y-hidden transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-125 duration-300 ">
      <img src={IMG_CDN_URL + posterPath} alt={name} />
    </div>
  );
};

export default MovieCard;
