import React, { useState, useContext } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Button from "./../UI/Button";
import { useLocation } from "react-router";
import ThemeSwitcher from "./../UI/ThemeSwitcher";
import NewsContext from "../../store/Context";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UI/UserProfile";
import SelectLayout from "../UI/SelectLayout";
const Header = ({ handleSidebarToggle }) => {
  const { setSearchTerm } = useContext(NewsContext);
  const { loginWithPopup, isAuthenticated } = useAuth0();

  /**
   * for opening the sidebar
   */
  const handleMenu = () => {
    handleSidebarToggle();
  };

  /**
   * to get the search data from news
   */
  const searchDataHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    // header-section started
    <div className="grid grid-cols-3 p-3 bg-base shadow  sticky top-0 z-10">
      <div className="flex items-center">
        <label htmlFor="toggle-sidebar" className=" ">
          <MenuIcon
            className="h-8 sm:px-5  text-primary cursor-pointer"
            onClick={(event) => handleMenu(event)}
          />
        </label>

        <div className="border border-muted flex rounded-full px-3 py-1 sm:py-2 ms-2 sm:ms-5">
          <input
            placeholder="Search"
            className="outline-none bg-transparent placeholder:text-primary text-primary w-[140px] sm:w-auto"
            id="search"
            onKeyUp={(event) => searchDataHandler(event)}
          />
          <label htmlFor="search">
            <SearchIcon className="h-6 text-primary " />
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-primary text-3xl font-normal font-serif hidden sm:block">
          Inshorts
        </h1>
      </div>
      <div className=" flex justify-end items-center">
        <div className="justify-end sm:me-4">
          {/* if user is logged in than display user profile otherwise display Sign-In button */}
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <Button text=" Sign-In" onClick={loginWithPopup} />
          )}
        </div>
        <div className="hidden sm:block"><ThemeSwitcher /></div>
        <div className="hidden sm:block"><SelectLayout /></div>
      </div>
    </div>
    // header-section end
  );
};

export default Header;
