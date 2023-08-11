import React, { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Button from "./../UI/Button";
import ThemeSwitcher from "./../UI/ThemeSwitcher";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UI/UserProfile";
const Header = ({ handleSidebarToggle }) => {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  /**
   * for opening the sidebar
   */
  const handleMenu = () => {
    handleSidebarToggle();
  };

  return (
    // header-section started
    <div className="grid grid-cols-3 p-3 bg-base shadow  sticky top-0 z-10">
      <div className="flex items-center">
        <label htmlFor="toggle-sidebar" className=" ">
          <MenuIcon
            className="h-8 px-5 text-primary cursor-pointer"
            onClick={handleMenu}
          />
        </label>
        <div className="border border-muted flex rounded-full px-6 py-2 ms-5">
          <input
            placeholder="Search"
            className="outline-none bg-transparent placeholder:text-primary text-primary"
            id="search"
          />
          <label htmlFor="search">
            <SearchIcon className="h-6 text-primary " />
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-primary text-3xl font-normal font-serif ">
          Inshorts
        </h1>
      </div>
      <div className=" flex justify-end items-center">
        <div className="justify-end me-4">
          {/* if user is logged in than display user profile otherwise display Sign-In button */}
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <Button text=" Sign-In" on onClick={loginWithPopup} />
          )}
        </div>
        <ThemeSwitcher />
      </div>
    </div>
    // header-section end
  );
};

export default Header;
