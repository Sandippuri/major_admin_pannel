import React from 'react'

const Noticeitem = (props) => {
    return (
        <>
            <div className="flex flex-col justify-between mt-3 cursor-pointer shadow-sm gap-3">
                
                    <div className='flex flex-4 font-normal'>
                        <span className="text-md ">{props.id+1}.</span>
                        <p className="text-md">{props.title}</p>
                    </div>
                    <div className="flex flex-col items-end flex-1 text-gray-500 py-2 px-4 rounded-l-lg ">
                        <h1 className='text-sm'>{props.date}</h1>
                    </div>
            
            </div>

        </>


    )   
}

export default Noticeitem