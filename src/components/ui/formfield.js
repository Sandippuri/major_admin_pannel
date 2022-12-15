import React from 'react';

const Formfield = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.name} className="block mb-2 text-md font-medium text-gray-900">{props.title}</label>
            <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} id={props.id} className={`bg-gray-50 border ${props.width} border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`} placeholder={props.placeholder} required/>
        </div>
    )
}

export default Formfield