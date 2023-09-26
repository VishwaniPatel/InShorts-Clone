import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results , onChangeData }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const dropdownRef = useRef(null);
    

    useEffect(()=>{
        const handleOutsideClick = ()=>{
            if(dropdownRef.current ){
                setIsDropdownOpen(false)
            }
        }
        if(isDropdownOpen){
            document.addEventListener('click', handleOutsideClick)
        }
        else{
            document.addEventListener('click', handleOutsideClick)
        }
        
        return ()=>{
            document.removeEventListener('click', handleOutsideClick)
        };

    },[isDropdownOpen])
   

    const dataHandler = (data) => {
        onChangeData(data)
         setIsDropdownOpen(false)
       }

    return (
        <>
            {isDropdownOpen && <div  ref={dropdownRef} className="w-full bg-inverted flex flex-col mt-1 h-[300px] overflow-auto shadow rounded-xl">
                {results.map((result, id) => {
                    return <SearchResult searchData={result} key={id} onSearchData={dataHandler}  />;
                })}
            </div>}
        </>
    )
}

export default SearchResultsList