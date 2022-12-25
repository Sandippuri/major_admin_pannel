import React from 'react'

const Noticeitem = () => {
    return (
        <>
            <div className="flex justify-between mt-3 cursor-pointer shadow-sm gap-3">
                
                    <div className="flex flex-col items-center flex-1 bg-gray-500 text-white py-2 px-4 rounded-l-lg ">
                        <h1 className='text-2xl font-bold'>5</h1>
                        <h4 className='text-sm font-medium items-center'>OCT<span>2022</span></h4>
                    </div>
                    <div className='flex flex-wrap flex-4'>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut laudantium totam quaerat quis! </p>
                    </div>
            
            </div>

        </>


    )   
}

export default Noticeitem