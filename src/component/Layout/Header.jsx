import React, { useState, useContext, useEffect } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Button from "./../UI/Button";
import { useLocation } from "react-router";
import ThemeSwitcher from "./../UI/ThemeSwitcher";
import NewsContext from "../../store/Context";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UI/UserProfile";
import SelectLayout from "../UI/SelectLayout";
import UseAllNewsData from "../../hooks/UseAllNewsData"
import SearchBar from "../UI/SearchBar";
const Header = ({ handleSidebarToggle }) => {

  const path = useLocation()
  const { loginWithPopup, isAuthenticated } = useAuth0();

  /**
   * for opening the sidebar
   */
  const handleMenu = () => {
    handleSidebarToggle();
  };



  return (
    // header-section started
    <div className="grid grid-cols-3 p-3 bg-base shadow  sticky top-0 z-10  ">

      <div className="flex items-center">
        <label htmlFor="toggle-sidebar" className=" ">
          <MenuIcon
            className="h-8 sm:px-5  text-primary cursor-pointer"
            onClick={(event) => handleMenu(event)}
          />
        </label>
        {path.pathname === '/home' && <div className="">
          <SearchBar />
        </div>
        }


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
