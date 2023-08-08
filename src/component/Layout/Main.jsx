import React from 'react'
import Header from './Header'
import Routing from '../../routes/Routing'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Main