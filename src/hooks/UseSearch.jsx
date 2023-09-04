/**
 * for searchdata
 * @param {*} NewsData
 * @param {*} search
 * @returns
 */
const UseSearchData = (NewsData, search) => {
  if (!search) {
    return NewsData;
  } else {
    const filterData = NewsData.filter((res) => {
      return JSON.stringify(res.title)
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    return filterData;
  }
};
export default UseSearchData;
