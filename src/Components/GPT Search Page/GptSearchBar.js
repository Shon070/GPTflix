const GptSearchBar = () => {
  return (
    <div className="flex justify-center">
      <form className="w-1/2 bg-black opacity-80 mt-[12%] rounded-md">
        <input
          type="text"
          className="p-4 my-4 ml-4 bg-black opacity-90 w-8/12 border-white text-white rounded-full"
          placeholder="What would you like to watch today?"
        />
        <button className="w-3/12 p-4 ml-6 rounded-full bg-red-600 hover:opacity-90 font-semibold text-lg text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
