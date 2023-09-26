import React, { useEffect } from 'react';
import { SearchIcon , XCircleIcon, XIcon } from '@heroicons/react/outline';

import UseAllNewsData from '../../hooks/UseAllNewsData';
import { useContext, useState } from 'react';
import NewsContext from '../../store/Context';
import SearchResultsList from './SearchResultsList';

const SearchBar = () => {
    const { searchTerm, setSearchTerm, setFilterData } = useContext(NewsContext);
    const [results, setResults] = useState([]);
    const [showClose , setShowClose] = useState(false)

    const data = UseAllNewsData()

    useEffect(() => {
        setResults(data)
    }, [])

/**
 * 
 * @param {*} value 
 */
    const fetchData = (value) => {
        const results = data.filter((res) => {

            return (
                value &&
                res &&
                res.title &&
                res.title.toLowerCase().includes(value)
            )
        })
        setResults(results)
    };




    /**
     * to get the search data from news
     */
    const searchDataHandler = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        // to show and hide close icon 
        setShowClose(searchValue.trim() !== '')

        // setIsDropdownOpen(true)
        fetchData(searchValue)
    };
    const dataHandler = (searchData) => {
        document.getElementById('search').value = searchData.title;
        
    }
    
    /**
     * remove the searchterm value from Searchbar 
     */
    const removeSearchTermHandler = ()=>{
        // blank the searchTerm for showing all data 
        setSearchTerm('')
    // remove the value from the input
        document.getElementById('search').value = ''
        setShowClose(false)
    }

    
    return (
        <div className='w-full relative'>
            <div className="border border-muted flex rounded-full px-2 py-1 sm:py-2  ms-2 sm:ms-5">
                <label htmlFor="search">
                    <SearchIcon className="h-6 text-primary cursor-pointer" />
                </label>
                <input
                    placeholder="Search"
                    className="outline-none bg-transparent placeholder:text-primary text-primary  w-[140px] sm:w-auto flex-grow px-2"
                    id="search"
                    onKeyUp={(event) => searchDataHandler(event)}
                    autoComplete='off'
                />
                {showClose && <XIcon className='text-primary h-6 cursor-pointer'  onClick={removeSearchTermHandler} />}
            </div>
            <div className='absolute w-full '>
                {results && results.length > 0 && <SearchResultsList results={results} onChangeData={dataHandler} />}
            </div>
        </div>
    )
}

export default SearchBar