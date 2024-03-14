import React from "react";

const Home = () => {
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
          <div>number</div>
        </div>
        <div className="p-2">uzunluk belirleme</div>
        <div className="p-2">
          <div className="flex gap-x-2 ">
            <input type="checkbox" />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="flex gap-x-2 ">
            <input type="checkbox" />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="flex gap-x-2 ">
            <input type="checkbox" />
            <p>Include Numbers</p>
          </div>
          <div className="flex gap-x-2 ">
            <input type="checkbox" />
            <p>Include Symbols</p>
          </div>
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
