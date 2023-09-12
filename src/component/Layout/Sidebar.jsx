import React, { useContext, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import NewsContext from "../../store/Context";
import { Link } from "react-router-dom";
import Logout from "../../feature/Logout";
import ThemeSwitcher from './../UI/ThemeSwitcher';
import SelectLayout from './../UI/SelectLayout';

const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {
  const { setSelectedCategory } = useContext(NewsContext);
  const newsCategories = [
    { id: "all_news", name: "All News", active: true },
    { id: "technology", name: "Technology", active: false },
    { id: "science", name: "Science", active: false },
    { id: "sports", name: "Sports", active: false },
    { id: "entertainment", name: "Entertainment", active: false },
    { id: "business", name: "Business", active: false },
  ];

  const [categories, setCategories] = useState(newsCategories);

  /**
   * to display active category
   * @param {*} categoryId
   */
  const setActiveCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const updatedCategories = categories.map((category) => ({
      ...category,
      active: category.id === categoryId,
    }));
    setCategories(updatedCategories);
  };

  return (
    // sidebar started
    <div
      className={` bg-inverted text-primary  shadow absolute transition-all duration-300 ease-in-out top-0  w-60 sm:w-80 h-full z-10  ${isSidebarOpen ? "left-[0]" : "left-[-320px]"
        }`}
    >
      {/* Your sidebar content */}
      <div className="flex flex-col h-full justify-between">
        <div>
          <div
            className="flex items-center my-3 cursor-pointer p-4"
            onClick={onCloseSidebar}
          >
            <ChevronLeftIcon className="text-inverted h-6 me-2" />
            <span className="text-inverted font-normal">Back to Home</span>
          </div>
          <h2 className="text-xl font-semibold text-inverted 50 mb-2 p-4   ">
            News Categories
          </h2>
          <div className="border border-muted font-thin  mx-4"></div>
          {/* news categories */}
          <ul className="mt-2">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer text-inverted px-4 py-3 ${category.active ? "bg-gray-400" : ""
                  } `}
                onClick={() => {
                  setActiveCategory(category.id);
                }}
              >
                <Link to="/home">{category.name}</Link>
              </li>
            ))}
          </ul>
          <div className="border border-muted font-thin  mx-4"></div>
          <ul className="mt-2">
            <li className="cursor-pointer text-inverted px-4 py-3">
              <Link to="/saved-news">Saved News</Link>
            </li>
          </ul>
        </div>
        {/* for logout , themeSwitcher , selectLayout  button */}

        <div>
          <div className="block sm:hidden">
            <div className="px-4 flex py-2 "> <ThemeSwitcher /></div>
            <div className="px-2 flex py-2 "><SelectLayout /></div>
          </div>
          <Logout />
        </div>
      </div>
    </div>
    // sidebar end
  );
};

export default Sidebar;
