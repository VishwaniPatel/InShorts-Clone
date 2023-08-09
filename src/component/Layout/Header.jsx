import React, { useState } from 'react'
import { MenuIcon, SearchIcon } from '@heroicons/react/outline'
import Button from './../UI/Button';
import ThemeSwitcher from './../UI/ThemeSwitcher';


const Header = ({ handleSidebarToggle }) => {
    const hadnleMenu = (event) => {
        event.stopPropagation()
        handleSidebarToggle()
    }

    return (
        <div className='grid grid-cols-3 p-3 bg-base shadow' >
            <div className='flex items-center'>
                <label htmlFor='toggle-sidebar' className=' ' >
                    < MenuIcon className='h-8 px-5 text-primary cursor-pointer' onClick={(event) => { hadnleMenu(event) }} />
                </label>
                <div className='border border-muted flex rounded-full px-6 py-2 ms-5'>
                    <input placeholder='Search' className='outline-none bg-transparent placeholder:text-primary text-primary' id='search' />
                    <label htmlFor='search'><SearchIcon className='h-6 text-primary ' /></label>
                </div>
            </div>
            <div className='flex items-center justify-center'><h1 className='text-primary text-3xl font-normal font-serif '>Inshorts</h1></div>
            <div className=' flex justify-end items-center'>
                <Button text=' Sign-In' />
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header