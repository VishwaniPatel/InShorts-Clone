import React, { useState } from "react";
import NewsContext from "./Context";

export const NewsProvider = ({ children }) => {
  const [savedNewsItems, setSavedNewsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showAlternateLayout, setShowAlternateLayout] = useState(true);
  const [deletedNewsId, setDeletedNewsId] = useState()
  return (
    <NewsContext.Provider
      value={{
        savedNewsItems,
        setSavedNewsItems,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        isLoading,
        setIsLoading,
        showAlternateLayout,
        setShowAlternateLayout,
        deletedNewsId,
        setDeletedNewsId
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
