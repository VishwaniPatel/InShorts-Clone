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
      const response = res.data.data.news_list.map((data) => {
        return {
          id: data.hash_id,
          image_url: data.news_obj.image_url,
          title: data.news_obj.title,
          author_name: data.news_obj.author_name,
          created_at: data.news_obj.created_at,
          content: data.news_obj.content,
          source_url: data.news_obj.source_url,
          source_name: data.news_obj.source_name,
          category_names: data.news_obj.category_names,
        };
      });
      setAllNews(response);
    });
  };
  return allNews;
};

export default UseNewsData;
