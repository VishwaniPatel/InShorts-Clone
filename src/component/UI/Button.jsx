import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='bg-inverted text-inverted border rounded-full px-6 py-2 mx-3'>{text}</button>
    )
}

export default Button