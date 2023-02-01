import React from 'react'

const Card = ({children,title, ...other}) => {
  return (
    <div className='w-1/3 items-center self-center border-2 border-gray-100 rounded-md shadow-md gap-2 p-4 '>
        <h1 className="text-3xl text-center font-bold text-red-500 mb-5">{title}</h1>
        {children}
    </div>
  )
}

export default Card