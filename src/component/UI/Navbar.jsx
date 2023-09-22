import React, { useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { useAuth0 } from "@auth0/auth0-react";
import NewsContext from "../../store/Context";
const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();

  const { setSearchTerm, searchTerm } = useContext(NewsContext)

  const navigateToPage = () => {
    console.log("navigate to page");
    // searchTerm = ''
  }

  return (
    <div className="sticky top-16 bg-base p-4">
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
            onClick={navigateToPage}
          >
            <div className="text-primary hover:font-semibold p-4 relative" >
              For You
              {location.pathname === "/home" && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <NavLink
            to="/top-stories"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            onClick={navigateToPage}
          >
            <div className="text-primary hover:font-semibold p-4 relative ">
              Top Stories
              {location.pathname === "/top-stories" && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
            onClick={navigateToPage}
          >
            <div className="text-primary hover:font-semibold p-4 relative">
              Trending
              {location.pathname === "/trending" && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-2 bg-inverted rounded-lg"></div>
              )}
            </div>
          </NavLink>

          {/* End: Navbar category */}
          {/* Start: Navbar category */}
          {isAuthenticated ? (
            <NavLink
              to="/saved-news"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              onClick={navigateToPage}
            >
              <div className="text-primary hover:font-semibold p-4 relative">
                Saved News
                {location.pathname === "/saved-news" && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-2 bg-inverted rounded-lg"></div>
                )}
              </div>
            </NavLink>
          ) : (
            ""
          )}

          {/* End: Navbar category */}
        </div>
      </div>
      {/* End: Navbar */}
    </div>
  );
};

export default Navbar;
