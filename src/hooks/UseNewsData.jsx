import { useState, useEffect } from "react";
import { getAllNewsData } from "../services/NewsDataService";

const UseNewsData = (category) => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    getNewsData();
  }, []);

  // get all news data using service using category parameter
  const getNewsData = async () => {
    await getAllNewsData(category).then((res) => {
      console.log(res);
      const response = res.data.data.news_list;
      setAllNews(response);
    });
  };
  return allNews;
};

export default UseNewsData;
