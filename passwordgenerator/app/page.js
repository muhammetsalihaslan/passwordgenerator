"use client";
import React, { useState } from "react";

const Home = () => {
  const [long, setLong] = useState(20);

  const handleChange = (e) => {
    setLong(e.target.value);
  };
  return (
    <div className="bg-green-500 flex flex-col items-center mt-[5rem] gap-y-6 ">
      <div>Password Generator</div>
      <div className="border rounded-md flex w-[450px] h-[50px] items-center justify-between ">
        <div className="p-2">pasword area</div>
        <button className="p-2">Copy</button>
      </div>
      <div className="border rounded-md w-[450px] h-[450px] ">
        <div className="flex justify-between p-2">
          <div>Character Length</div>
          <div>{long}</div>
        </div>
        <div className="p-2">
          <input
            type="range"
            min={0}
            max={20}
            value={long}
            onChange={handleChange}
            step={1}
            className=""
          />
        </div>
        <div className="p-2">
          <label className="flex gap-x-2 ">
            <input type="checkbox" />
            Include Uppercase Letters
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" />
            Include Lowercase Letters
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" />
            Include Numbers
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" />
            Include Symbols
          </label>
        </div>
        <div className="border rounded-md flex w-[435px] h-[70px] items-center justify-between ms-2 mt-5 ">
          <div className="p-2">STRENGTH</div>
          <div className="p-2">streght meter</div>
        </div>
        <div className="border rounded-md flex w-[435px] h-[70px] items-center justify-center  ms-2 mt-5">
          <div className="p-2">Generate</div>
          <div>➡️</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
