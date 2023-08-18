import { createContext } from "react";

const NewsContext = createContext({
    savedNewsItems: [],
    setSavedNewsItems: () => { },
    selectedCategory: '',
    setSelectedCategory: () => { },
    searchTerm: '',
    setSearchTerm: () => { },
});

export default NewsContext;
