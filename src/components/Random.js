import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {

    const {spinner, gif, fetchData} = useGif();

  return (
    <div
      className="w-1/2 bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

      {spinner ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="gif here" height="200" />
      )}

      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white opacity-80 rounded-lg text-lg py-1 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
