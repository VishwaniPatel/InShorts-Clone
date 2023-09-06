import { useState, useEffect, useContext } from "react";
import { getAllNewsData } from "../services/NewsDataService";
import NewsContext from "../store/Context";
import {
  getLatestNewsData,
  postAllNewsData,
  postLatestNewsData,
} from "../services/SavedNewsDataService";

const UseNewsData = (category) => {
  const [allNews, setAllNews] = useState([]);
  const { setIsLoading } = useContext(NewsContext);
  const [previousNewsTime, setPreviousNewsTime] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getPreviousNewsData();
    const interval = setInterval(() => {
      getPreviousNewsData();
    }, 1 * 60 * 1000);
    return () => {
      clearInterval(interval); // Clear interval when the component unmounts
    };
  }, []);

  const getPreviousNewsData = async () => {
    try {
      await getLatestNewsData().then((res) => {
        const previous = res.data.latestNews;
        setPreviousNewsTime(previous);
        if (previous) {
          getNewsData(previous);
        }
      });
    } catch (error) {
      console.error("Error fetching previous news data:", error);
    }
  };

  // get all news data using service using category parameter
  const getNewsData = async (previous) => {
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
          isLike: false,
          isSaved: false,
        };
      });

      const filteredNews = response.filter((data) => {
        return data.created_at > previous;
      });

      if (filteredNews.length > 0) {
        // postAllNewsData(...filteredNews);
      }
      const latestNews = res.data.data.news_list[0].news_obj.created_at;
      postLatestNewsData({ latestNews: latestNews });
      setAllNews(response);
      setIsLoading(false); // Set loading to false when fetching is complete
    });
  };

  useEffect(() => {
    // Fetch news data when previousNews changes (excluding initial null)
    getNewsData();
  }, [previousNewsTime]);
  return allNews;
};

export default UseNewsData;
