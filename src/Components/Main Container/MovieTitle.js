const MovieTitle = ({ description }) => {
  return (
    <div className="absolute text-white pt-44 px-14">
      <img
        className="w-96 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-125 duration-300"
        src={process.env.PUBLIC_URL + "/Dune.png"}
        alt="Movie Logo"
      />
      <h3 className=" mb-7 text-lg w-1/4">{description}</h3>
      <div className="">
        <button className="bg-white text-black p-4 px-14 text-xl font-semibold bg-opacity-60 hover:bg-opacity-30 rounded-md">
          ⏵ Play
        </button>
        <button className="mx-2 bg-gray-400 text-white p-4 px-12 text-xl font-semibold bg-opacity-60 hover:bg-opacity-30 rounded-md">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
