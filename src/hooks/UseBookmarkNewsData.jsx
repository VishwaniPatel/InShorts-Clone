import { useEffect, useState } from "react";
import { getUserSavedNewsData } from "../services/SavedNewsDataService";

const UseBookmarkNewsData = () => {
  const [savedNewsData, setSavedNewsData] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    savedNews();
  }, []);

  /**
   * getdata from database
   */
  const savedNews = async () => {
    await getUserSavedNewsData(userId).then((response) => {
      const responseData = [];
      for (const key in response.data.news) {
        const id = key;
        const newsItem = {
          id: id,
          news_id: response.data.news[id].id,
          title: response.data.news[id].title,
          image_url: response.data.news[id].image_url,
          author_name: response.data.news[id].author_name,
          created_at: response.data.news[id].created_at,
          content: response.data.news[id].content,
          source_url: response.data.news[id].source_url,
          source_name: response.data.news[id].source_name,
        };
        responseData.push(newsItem);
        setSavedNewsData(responseData);
      }
    });
  };
  return savedNewsData;
};

export default UseBookmarkNewsData;
