import React from 'react'

const Noticeitem = () => {
    return (
        <>
            <div className="flex flex-wrap justify-end mt-3 cursor-pointer">
                <div className="flex gap-4 flex-2">
                    <img class="w-16 h-16 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" />
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut laudantium totam quaerat quis! Quidem obcaecati temporibus at. Aspernatur vero neque delectus sint assumenda quaerat inventore, praesentium consequatur porro reiciendis!</p>
                </div>
                <p className="text-sm mb-2">2022-02-01</p>
            </div>
            <hr className=' h-px bg-gray-200 border-0'/>

        </>


    )   
}

export default Noticeitem