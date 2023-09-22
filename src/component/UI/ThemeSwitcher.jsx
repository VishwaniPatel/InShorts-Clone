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
    <div className={`darkMode ? "dark" : ""  flex cursor-pointer`} onClick={toggleTheme}>
      {darkMode ? (
        <SunIcon className="block h-6 w-6 sm:text-primary text-inverted" />
      ) : (
        <MoonIcon
          className="block h-6 w-6 sm:text-primary text-inverted" 
        />
      )}
      <span className="text-inverted ps-4 block sm:hidden">Theme Switcher</span>
    </div>
  );
};

export default ThemeSwitcher;
