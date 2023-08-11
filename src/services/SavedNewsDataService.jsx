import axios from "axios"

const baseUrl = 'https://inshortclone-default-rtdb.firebaseio.com/'



/**
 * for post saved news data
 * @param {*} data 
 * @param {*} id 
 * @returns 
 */
export const postUserSavedNewsData = async (data, id) => {
    console.log(id)
    return await axios.post(baseUrl + "users/" + id + "/news.json", { ...data }).then((res) => {
        console.log(res);
    })
}



/**
 * get saved News Data
 * @param {*} id 
 * @returns 
 */
export const getUserSavedNewsData = async (id) => {
    return await axios.get(baseUrl + "users/" + id + ".json")
}



