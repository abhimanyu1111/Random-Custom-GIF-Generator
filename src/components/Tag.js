import useGif from "../hooks/useGif";
import { useState } from "react";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, fetchData, spinner} = useGif(tag);

  return (
    <div
      className="w-1/2 bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="text-2xl underline uppercase font-bold">Custom GIF</h1>

      {spinner ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="gif here" height="200" />
      )}

      <input className="w-10/12 bg-white opacity-80 rounded-lg text-lg py-1 mb-[3px] text-center" 
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white opacity-80 rounded-lg text-lg py-1 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
