import React, { useState } from "react";
import NewsContext from "./Context";

export const NewsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedNewsItems, setSavedNewsItems] = useState([])

  return (
    <NewsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        savedNewsItems,
        setSavedNewsItems
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
