import { useContext, useState, useEffect } from "react";
import NewsContext from "../store/Context";
import UseNewsData from "./UseNewsData";
import UseAllNewsData from "./UseAllNewsData";

const UseFilterData = () => {
  const { selectedCategory } = useContext(NewsContext);

  const allNews = UseNewsData("all_news");
  const newsFromDatabase = UseAllNewsData();
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    setNewsData(newsFromDatabase);
  }, [newsFromDatabase]);

  useEffect(() => {
    filteredData();
  }, [selectedCategory]);

  /**
   * set news data category wise
   * by default all news should be displayed
   */
  const filteredData = () => {
    if (selectedCategory == "all_news") {
      setNewsData(newsFromDatabase);
    } else {
      console.log(newsFromDatabase);
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
