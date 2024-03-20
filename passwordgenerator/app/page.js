"use client";
import React, { useState } from "react";

const Home = () => {
  const [long, setLong] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleChange = (e) => {
    setLong(e.target.value);
  };

  const genaratePasswords = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let validChars = "";
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let password = "";
    for (let i = 0; i < long; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="bg-green-500 flex flex-col items-center mt-[5rem] gap-y-6 ">
      <div>Password Generator</div>
      <div className="border rounded-md flex w-[450px] h-[50px] items-center justify-between ">
        <div className="p-2">{generatedPassword}</div>
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
            <input type="checkbox" checked={includeUppercase} />
            Include Uppercase Letters
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" checked={includeLowercase} />
            Include Lowercase Letters
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" checked={includeNumbers} />
            Include Numbers
          </label>
          <label className="flex gap-x-2 ">
            <input type="checkbox" checked={includeSpecialChars} />
            Include Symbols
          </label>
        </div>
        <div className="border rounded-md flex w-[435px] h-[70px] items-center justify-between ms-2 mt-5 ">
          <div className="p-2">STRENGTH</div>
          <div className="p-2">streght meter</div>
        </div>
        <div className="border rounded-md flex w-[435px] h-[70px] items-center justify-center  ms-2 mt-5">
          <div className="p-2" onClick={genaratePasswords}>
            Generate
          </div>
          <div>➡️</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
