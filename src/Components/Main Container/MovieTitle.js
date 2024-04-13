const MovieTitle = ({ title, description }) => {
  return (
    <div className="absolute text-white pt-52 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h3 className="py-6 text-lg w-1/4">{description}</h3>
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
