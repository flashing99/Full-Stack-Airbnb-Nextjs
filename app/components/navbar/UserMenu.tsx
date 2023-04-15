"use client";
import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center justify-between ">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold hover:bg-neutral-100 py-3 px-4 rounded-full transition cursor-pointer "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="  p-4 md:py-1 md:px-2  border-[1px] border-neutral-200 hover:shadow-md flex flex-row items-center justify-center gap-3 transition rounded-full "
        >
          <AiOutlineMenu />
          <Avatar />
        </div>
      </div>
      {/* .............. */}
      {isOpen && (
        <div
          className="
       absolute
       rounded-xl
       shadow-md
       bg-white
       w-[40vw]
       md:w-3/4
       overflow-hidden

       top-12
       right-0
       text-sm

      "
        >
          <div className="flex flex-col  cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}

      {/* ............... */}
    </div>
  );
};

export default UserMenu;
