
/**
 * for searchdata
 * @param {*} NewsData 
 * @param {*} search 
 * @returns 
 */
const UseSearchData = (NewsData, search) => {

    if (!search) {
        return NewsData
    }

    else {
        const filterData = NewsData.filter((res) => {
            // console.log(res);
            return JSON.stringify(res.news_obj.title).toUpperCase().includes(search.toUpperCase())
        }
        )
        return filterData
    }
}
export default UseSearchData