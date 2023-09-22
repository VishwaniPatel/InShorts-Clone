import axios from "axios";

const baseUrl = "https://inshortclone-default-rtdb.firebaseio.com/";
/**
 * for post saved news data
 * @param {*} data
 * @param {*} id
 * @returns
 */
export const postUserSavedNewsData = async (data, id) => {
<<<<<<< HEAD
  return await axios
    .post(baseUrl + "users/" + id + "/news.json", data)
=======
  return await axios.post(baseUrl + "users/" + id + "/news.json", data);
>>>>>>> 7d995bb2135648370bca6bc749414e9672d7ec6f
};



/**
 * get saved News Data
 * @param {*} id
 * @returns
 */
export const getUserSavedNewsData = async (id) => {
  return await axios.get(baseUrl + "users/" + id + "/news.json");
};

export const deleteUserSavedNewsData = async (userId, newsId) => {
  return await axios.delete(
    baseUrl + "users/" + userId + "/news/" + newsId + ".json")
};
export const postLatestNewsData = async (data) => {
  return await axios.put(baseUrl + "latestNews.json", data);
};
export const getLatestNewsData = async () => {
  return await axios.get(baseUrl + "latestNews.json");
};


export const postAllNewsData = async (data) => {
  return await axios.post(baseUrl + "allNews.json", data);
};
export const getAllNewsDataFromDatabase = async () => {
  return await axios.get(baseUrl + "allNews.json");
};




