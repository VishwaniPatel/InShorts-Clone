import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";


const ThemeSwitcher = () => {

  const [darkMode, setDarkMode] = useState(false);

  /**
   * add dark and light theming
   */
  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);


  return (
    // Input button for toggle theme
    <div className={darkMode ? "dark" : ""}>
      <div className=" ">
        {darkMode ? (
          <SunIcon className="block h-6 w-6 text-base" onClick={toggleTheme} />
        ) : (
          <MoonIcon className="block h-6 w-6 text-base" onClick={toggleTheme} />
        )}
      </div>
    </div >
  );
};

export default ThemeSwitcher;
