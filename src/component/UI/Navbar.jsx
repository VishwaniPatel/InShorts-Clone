import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropDown from "./DropDown";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
        <div className="flex  w-full justify-between border-b-2 border-b-base">
          {/*Start: Navbar category */}

          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            onClick={() => activeCategory(0)}
          >
            <div className="text-primary hover:font-semibold p-4 relative">
              For You
              {activeIndex === 0 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <NavLink
            to="/top-stories"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            <div
              className="text-primary hover:font-semibold p-4 relative "
              onClick={() => activeCategory(1)}
            >
              Top Stories
              {activeIndex === 1 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            <div
              className="text-primary hover:font-semibold p-4 relative"
              onClick={() => activeCategory(2)}
            >
              Trending
              {activeIndex === 2 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <NavLink
            to="/saved-news"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            <div
              className="text-primary hover:font-semibold p-4 relative"
              onClick={() => activeCategory(3)}
            >
              Saved News
              {activeIndex === 3 && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
        </div>
      </div>
      {/* End: Navbar */}
    </>
  );
};

export default Navbar;
