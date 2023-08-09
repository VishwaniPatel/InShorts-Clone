import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Master = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false)
    }


    return (
        <div className='h-full' >
            <Header handleSidebarToggle={handleSidebarToggle} />
            <Sidebar isSidebarOpen={isSidebarOpen} onCloseSidebar={handleCloseSidebar} />
            <Outlet />
        </div>
    )
}

export default Master