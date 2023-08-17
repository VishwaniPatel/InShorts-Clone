import React, { useState } from "react";
import NewsContext from "./Context";

export const NewsProvider = ({ children }) => {
  const [savedNewsItems, setSavedNewsItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NewsContext.Provider
      value={{
        savedNewsItems,
        setSavedNewsItems,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,

      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
