import axios from "axios";

const baseUrl = "https://inshortclone-default-rtdb.firebaseio.com/";

/**
 * for post saved news data
 * @param {*} data
 * @param {*} id
 * @returns
 */
export const postUserSavedNewsData = async (data, id) => {
  return await axios
    .post(baseUrl + "users/" + id + "/news.json", { ...data })
    .then((res) => { });
};

/**
 * get saved News Data
 * @param {*} id
 * @returns
 */
export const getUserSavedNewsData = async (id) => {
  return await axios.get(baseUrl + "users/" + id + ".json");
};


export const deleteUserSavedNewsData = async (userId, newsId) => {
  return await axios.delete(baseUrl + 'users/' + userId + '/news/' + newsId + '.json')
}
