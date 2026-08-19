import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className=" w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h2
        className=" bg-yellow-300 opacity-80 rounded-lg w-11/12 text-center mt-[40px] ml-[20px]
       px-10 py-2 text-4xl font-bold"
      >
        RANDOM GIFS
      </h2>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
