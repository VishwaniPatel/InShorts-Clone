import { useEffect, useState } from "react";
import { getUserSavedNewsData } from "../services/SavedNewsDataService";

const UseBookmarkNewsData = () => {

    const [savedNewsData, setSavedNewsData] = useState([])

    const userId = localStorage.getItem("userId")
    useEffect(() => {
        savedNews()
    }, [])

    /**
     * getdata from database
     */
    const savedNews = async () => {
        await getUserSavedNewsData(userId).then((response) => {
            const responseData = [];
            for (const key in response.data.news) {
                // console.log("In loooop", responseData);
                const id = key;
                const newsItem = {
                    id: id,
                    title: response.data.news[id].news_obj.title,
                    image_url: response.data.news[id].news_obj.image_url,
                    author_name: response.data.news[id].news_obj.author_name,
                    created_at: response.data.news[id].news_obj.created_at,
                    content: response.data.news[id].news_obj.content,
                    source_url: response.data.news[id].news_obj.source_url,
                    source_name: response.data.news[id].news_obj.source_name
                }
                responseData.push(newsItem)
                setSavedNewsData(responseData)
            }
            console.log(responseData);

        })
    }
    return savedNewsData;
}

export default UseBookmarkNewsData