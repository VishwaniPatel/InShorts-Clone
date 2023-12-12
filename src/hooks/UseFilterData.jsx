import { useContext, useState, useEffect } from "react";
import NewsContext from "../store/Context";
import UseNewsData from "./UseNewsData";
import UseAllNewsData from "./UseAllNewsData";
import Skeleton from "../component/UI/Skeleton";

const UseFilterData = () => {
  const { selectedCategory } = useContext(NewsContext);
  const { data: newsFromDatabase, isLoading } = UseAllNewsData();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setNewsData(newsFromDatabase);
    }
  }, [newsFromDatabase]);

  useEffect(() => {
    if (!isLoading) {
      filteredData();
    }
  }, [selectedCategory]);

  /**
   * set news data category wise
   * by default all news should be displayed
   */
  const filteredData = () => {
    if (selectedCategory === "all_news") {
      setNewsData(newsFromDatabase);
    } else {
      // filter new data according to selected category
      const categoryData = newsFromDatabase.filter((response) =>
        response.category_names.includes(selectedCategory)
      );
      setNewsData(categoryData);
    }
  };
  return newsData;
};

export default UseFilterData;
