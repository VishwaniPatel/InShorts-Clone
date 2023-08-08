import React from 'react'
import Header from './Header'
import Routing from '../../routes/Routing'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Master = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Master