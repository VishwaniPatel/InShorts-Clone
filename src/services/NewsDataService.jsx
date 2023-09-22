import axios from "axios";
import { baseUrl } from "../environment/environment";
// to get all news
export const getAllNewsData = async (category) => {
  const newsData = `${baseUrl}${category}&max_limit=10&include_card_data=true`;
  return await axios.get(`${newsData}`);
};


