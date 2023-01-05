import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const DashboadLayout = (props) => {
  return (
    <div> 
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            <div className=" ml-64 pt-20 w-full mx-10">
            {props.childrens}
            </div>
        </div>
    </div>
  )
}

export default DashboadLayout