import { useState, useEffect } from "react";
import { getAllNewsDataFromDatabase } from "../services/SavedNewsDataService";

const UseAllNewsData = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    getAllNewsFromDatabase();
  }, []);
  const getAllNewsFromDatabase = async () => {
    const response = await getAllNewsDataFromDatabase();

    const responseData = [];
    for (const key in response.data) {
      const id = key;
      const newsItem = {
        news_id: id,
        id: response.data[id].id,
        title: response.data[id].title,
        image_url: response.data[id].image_url,
        author_name: response.data[id].author_name,
        created_at: response.data[id].created_at,
        content: response.data[id].content,
        source_url: response.data[id].source_url,
        source_name: response.data[id].source_name,
        category_names: response.data[id].category_names,
        isLike: response.data[id].isLike,
        isSaved: response.data[id].isSaved,
      };
      responseData.push(newsItem);
    }
    setAllNews(responseData.reverse());
  };
  return allNews;
};

export default UseAllNewsData;
