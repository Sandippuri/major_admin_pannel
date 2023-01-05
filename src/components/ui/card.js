import React from 'react'

const Card = (props) => {
    return (
            <div className="w-full p-6 bg-white border text-gray-900 border-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{props.title}</h5>
                </a>
                <h1 className="mb-3 text-4xl font-bold text-center text-gray-900">{props.count}</h1>

                <div className="flex justify-between">
                    <a href="#" className="inline-flex items-center text-gray-900 md:text-sm">
                        See our guideline
                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                    </a>
                    <svg className="w-10 h-10 mb-2 text-gray-900" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                </div>
            </div>
    )
}

export default Card

