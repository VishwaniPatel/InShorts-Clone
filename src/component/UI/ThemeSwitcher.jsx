import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  /**
   * @description Theme switching on click of toggle button
   */

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setIsChecked(newDarkMode);
    if (newDarkMode) {
      // add dark class to body for dark theme
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      // remove dark class to body for light theme
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    // Set the initial dark mode state based on the stored value
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      setIsChecked(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      setIsChecked(false);
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    // Input button for toggle theme
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-base"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
