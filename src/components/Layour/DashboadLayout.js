import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const DashboadLayout = (props) => {
  return (
    <div>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            {props.childrens}
        </div>
    </div>
  )
}

export default DashboadLayout