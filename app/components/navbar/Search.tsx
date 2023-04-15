'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
      border-[1px]
      w-full     
      md:w-auto     
      py-2
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      cursor-pointer
      transition

      "
    >
      <div className="flex flex-row  justify-between  items-center ">
        {/* ........ */}
        <div className="text-sm font-semibold px-6">
          Any where
        </div>
        {/*  */}
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] border-gray-400 flex-1 text-center ">
          Any Week
        </div>
        {/*  */}
        <div className=" text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3  ">
          <div className="hidden sm:block ">Add Gests</div>
          <div className="bg-rose-600 font-bold rounded-full p-2 text-white">
            <BiSearch />
          </div>
        </div>
        {/* ........ */}
      </div>
    </div>
  );
};

export default Search;
