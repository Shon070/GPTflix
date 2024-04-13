import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import useShowTrailer from "../Hooks/useShowTrailer";

const MovieTrailer = ({ id }) => {
  const [isMuted, setIsMuted] = useState(true);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useShowTrailer(id);

  const handleToggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={handleToggleMute}
        className="absolute top-24 right-8 z-10 focus:outline-none"
      >
        <FontAwesomeIcon
          icon={isMuted ? faVolumeMute : faVolumeUp}
          className="text-red-500"
          size="lg"
        />
      </button>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${
          trailerVideo?.key
        }?si=5-eJYXSOSdeA94hr?&autoplay=1&mute=${isMuted ? 1 : 0}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
