import React, { useState } from "react";
import Button from "./Button";
import { ChevronDownIcon } from "@heroicons/react/outline";
import DropDown from "./DropDown";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex justify-end">
        {/* DropDown buttons displays for smaller size screens */}
        <DropDown />
      </div>
      {/* Start: Navbar */}
      {/* Navbar is hidden for smaller size screens */}
      <div className="hidden sm:block">
        <ul className="flex  w-full justify-between border-b-2 border-b-base">
          {/*Start: Navbar category */}
          <li
            className={`text-base hover:font-semibold p-4 relative ${
              activeIndex === 0 ? "font-bold" : ""
            }`}
            onClick={() => activeCategory(0)}
          >
            <a>For You</a>
            {activeIndex === 0 && (
              // Bar created to display selected category
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
            )}
          </li>
          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <li
            className={`text-base hover:font-semibold p-4 relative ${
              activeIndex === 1 ? "font-bold" : ""
            }`}
            onClick={() => activeCategory(1)}
          >
            <a>Top Stories</a>
            {activeIndex === 1 && (
              // Bar created to display selected category
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
            )}
          </li>
          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <li
            className={`text-base hover:font-semibold p-4  relative ${
              activeIndex === 2 ? "font-bold" : ""
            }`}
            onClick={() => activeCategory(2)}
          >
            <a>Trending</a>
            {activeIndex === 2 && (
              // Bar created to display selected category
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
            )}
          </li>
          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <li
            className={`text-base hover:font-semibold p-4 relative ${
              activeIndex === 3 ? "font-bold" : ""
            }`}
            onClick={() => activeCategory(3)}
          >
            <a>Saved News</a>
            {activeIndex === 3 && (
              // Bar created to display selected category
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2  w-24 h-2 bg-inverted rounded-lg"></div>
            )}
          </li>
          {/* End: Navbar category */}
        </ul>
        <div></div>
      </div>
      {/* End: Navbar */}
    </>
  );
};

export default Navbar;
