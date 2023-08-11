import React, { useEffect, useState } from 'react'
import UseBookmarkNewsData from '../hooks/UseBookmarkNewsData';
import Card from './../component/UI/Card'

const SavedNews = () => {

    const NewsData = UseBookmarkNewsData();

    console.log(NewsData);


    return (
        <div>
            {NewsData.map((res) => (
                //passing news data to card UI
                <Card news={res} key={res.id} />
            ))}
        </div>

    )
}

export default SavedNews