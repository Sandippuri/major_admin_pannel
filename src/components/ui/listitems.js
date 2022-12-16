import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ListItem = (props) => {
    const navigate= useNavigate();
        return (
            <div>
                <button className="w-3/4 ml-5 px-5 my-1" onClick={()=>navigate(props.navigate)}>
                    <div className="flex justify-start">
                        <div className="text-black pr-5">
                            {props.icon}
                        </div>
                        <div className="text-black text-lg">
                            {props.listTitle}
                        </div>
                    </div>
                </button>
            </div>
        )   
    }
