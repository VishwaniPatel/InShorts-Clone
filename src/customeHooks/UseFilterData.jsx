import { useContext, useState, useEffect } from "react";
import NewsContext from "../store/Context";
import UseNewsData from "./UseNewsData";

const UseFilterData = () => {
  const { selectedCategory } = useContext(NewsContext);
  const allNews = UseNewsData("all_news");
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    setNewsData(allNews);
  }, [allNews]);

  useEffect(() => {
    filteredData();
  }, [selectedCategory]);

  /**
   * set news data category wise
   * by default all news should be displayed
   */
  const filteredData = () => {
    if (selectedCategory == "all_news") {
      setNewsData(allNews);
    } else {
      // filter new data according to selected category
      const categoryData = allNews.filter((response) =>
        response.category_names.includes(selectedCategory)
      );
      setNewsData(categoryData);
    }
  };
  return newsData;
};

export default UseFilterData;
