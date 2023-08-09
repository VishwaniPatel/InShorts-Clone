import axios from "axios";
const baseUrl = "https://inshorts.com/api/en/news?category=";
// to get all news
export const getAllNewsData = async (category) => {
  const newsData = `${baseUrl}${category}&max_limit=100&include_card_data=true`;
  return await axios.get(`${newsData}`);
};
