import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SavedNews from '../pages/SavedNews'
import Master from '../component/Layout/Master'

const Routing = () => {
    return (
        /**
         * Define routes for pages
         */
        <Routes>
            <Route path='' element={<Master />}>
                <Route path='' element={<Navigate to={'/home'} />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/saved-news' element={<SavedNews />}></Route>
            </Route>
        </Routes>
    )
}

export default Routing