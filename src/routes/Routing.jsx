import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SavedNews from '../pages/SavedNews'
import Main from '../component/Layout/Main'

const Routing = () => {
    return (
        /**
         * Define routes for pages
         */
        <Routes>
            <Route path='' element={<Main />}>
                <Route path='' element={<Navigate to={'/home'} />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/saved-news' element={<SavedNews />}></Route>
            </Route>
        </Routes>
    )
}

export default Routing