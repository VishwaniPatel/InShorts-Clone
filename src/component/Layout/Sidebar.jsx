import React, { useState } from 'react';
import { ChevronLeftIcon, LogoutIcon } from '@heroicons/react/outline';



const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {

    const dummyCategories = [
        { id: 1, name: 'Technology', active: true },
        { id: 2, name: 'Science', active: false },
        { id: 3, name: 'Sports', active: false },
        { id: 4, name: 'Entertainment', active: false },
        { id: 5, name: 'Business', active: false },
    ];

    const [categories, setCategories] = useState(dummyCategories);

    /**
     * to display active category
     * @param {*} categoryId 
     */
    const setActiveCategory = (categoryId) => {
        const updatedCategories = categories.map(category => ({
            ...category,
            active: category.id === categoryId,
        }));
        setCategories(updatedCategories);
    };




    return (

        // sidebar started
        <div className={` bg-inverted text-primary  shadow absolute transition-all duration-300 ease-in-out top-0  w-64 h-full z-10  ${isSidebarOpen ? 'left-[0]' : 'left-[-270px]'}`} >
            {/* Your sidebar content */}
            <div className='flex flex-col h-full justify-between'>
                <div className="">
                    <div className='flex items-center my-3'>
                        <ChevronLeftIcon className='text-inverted h-12 cursor-pointer' onClick={onCloseSidebar} />
                        <span className='text-inverted font-normal'>Back to Home</span>
                    </div>
                    <h2 className="text-xl font-semibold text-inverted 50 mb-2 p-4   ">News Categories</h2>
                    <div className='border border-muted font-thin  mx-4'></div>
                    {/* news categories */}
                    <ul className="mt-2">
                        {categories.map((category, index) => (
                            <li key={category.id}
                                className={`cursor-pointer text-inverted px-4 py-3 ${category.active ? 'bg-gray-400' : ''} `} onClick={() => setActiveCategory(category.id)}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* for logout button */}
                <div className='flex px-4 py-3'>
                    <LogoutIcon className='text-inverted h-6 cursor-pointer' />
                    <span className='ps-3 text-inverted'>Logout</span>
                </div>
            </div>
        </div>
        // sidebar end
    );
};

export default Sidebar; 
