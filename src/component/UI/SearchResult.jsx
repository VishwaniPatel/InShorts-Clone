import React, { useContext } from 'react'
import NewsContext from '../../store/Context'
import { SearchIcon , } from '@heroicons/react/outline';


const SearchResult = ({ searchData , onSearchData }) => {
    const { setSearchNewsData } = useContext(NewsContext)
   
    const searchDataHandler = () => {
         // Call the onSearchData function with the searchData
        onSearchData(searchData)
         // Set the searchNewsData in the context with the searchData
        setSearchNewsData(searchData)
      }
    return (
        <div className='text-inverted flex items-center px-[10px] py-[10px] hover:bg-[#efefef] cursor-pointer '  onClick={searchDataHandler}>
            <span><SearchIcon className='text-inverted h-4 pe-2'/></span>
            <span className='truncate text-sm'>{searchData.title}</span>
            </div>
    )
}

export default SearchResult