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
    const response = await getUserSavedNewsData(userId);
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
        isSaved: response.data[id].isSaved,
      };
      responseData.push(newsItem);
      setSavedNewsData(responseData);
      setIsLoading(false);
    }
    setSavedNewsData(responseData);
    // });
  };
  return savedNewsData;
};

export default UseBookmarkNewsData;
