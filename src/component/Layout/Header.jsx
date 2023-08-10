import React, { useContext, useState } from 'react'
import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
import Button from './../UI/Button';
import ThemeSwitcher from './../UI/ThemeSwitcher';
import { useLocation } from 'react-router-dom';
import NewsContext from '../../store/Context';


const Header = ({ handleSidebarToggle }) => {

    const { setSearchTerm } = useContext(NewsContext)
    const path = useLocation();

    /**
     * for opening the sidebar 
     */
    const handleMenu = () => {
        handleSidebarToggle()
    }

    /**
     * to get the search data from news
     */
    const searchDataHandler = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value)
    }

    return (
        // header-section started
        <div className='grid grid-cols-3 p-3 bg-base shadow  sticky top-0' >
            <div className='flex items-center'>
                <label htmlFor='toggle-sidebar' className=' ' >
                    < MenuIcon className='h-8 px-5 text-primary cursor-pointer' onClick={handleMenu} />
                </label>
                {path.pathname === '/home' && <div className='border border-muted flex rounded-full px-6 py-2 ms-5'>
                    <input placeholder='Search' className='outline-none bg-transparent placeholder:text-primary text-primary' id='search' onKeyUp={(event) => searchDataHandler(event)} />
                    <label htmlFor='search'><SearchIcon className='h-6 text-primary ' /></label>
                </div>}
            </div>
            <div className='flex items-center justify-center'><h1 className='text-primary text-3xl font-normal font-serif '>Inshorts</h1></div>
            <div className=' flex justify-end items-center'>
                <Button text=' Sign-In' />
                <ThemeSwitcher />
            </div>
        </div>
        // header-section end
    )
}

export default Header