import { useEffect, useState, useContext } from "react";
import { getUserSavedNewsData } from "../services/SavedNewsDataService";
import NewsContext from "../store/Context";

const UseBookmarkNewsData = () => {
  const [savedNewsData, setSavedNewsData] = useState([]);
  const { setIsLoading } = useContext(NewsContext);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    setIsLoading(true);
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
          news_id: id,
          id: response.data.news[id].id,
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
        setIsLoading(false);
      }
      setSavedNewsData(responseData);
    });
  };
  return savedNewsData;
};

export default UseBookmarkNewsData;
