import React, { useState } from "react";
import NewsContext from "./Context";

export const NewsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <NewsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
