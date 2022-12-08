import React from "react";
import Checkbox from "../icons/checkbox";
const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center  mr-16">
      <h1 className="border-2 rounded-sm text-white mt-4">
        <Checkbox />
      </h1>
      <h1 className="border-2 rounded-sm text-white mt-4 border-t-[#00FFFF]">
        <Checkbox />
      </h1>
      <h1 className="border-2 rounded-sm text-white  mt-4  border-l-[#00FFFF] border-t-[#00FFFF]">
        <Checkbox />
      </h1>
      <h1 className="border-2 rounded-sm text-white  mt-4  border-r-[#00FFFF] border-l-[#00FFFF] border-t-[#00FFFF]">
        <Checkbox />
      </h1>
      <h1 className="border-2 rounded-sm text-white  mt-4  border-b-[#00FFFF] border-r-[#00FFFF] border-l-[#00FFFF] border-t-[#00FFFF]">
        <Checkbox />
      </h1>
      <div className=" rounded-sm text-[#00FFFF]  h-6 w-6 mt-4 flex justify-center items-center  bg-black">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Input;
