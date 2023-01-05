import React, { useEffect, useState } from 'react';
import { useGetAllStudentsQuery } from '../RTK/slices/student';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/card';
import DashboadLayout from '../components/Layour/DashboadLayout';
import Tables from '../components/ui/tables';


const Student = () => {
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllStudentsQuery();
  const navigate = useNavigate()
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: row => row.id,sortable:true },
    { name: "Student name", selector: row => row.name,sortable:true },
    { name: "Roll Number", selector: row => row.roll,sortable:true },
    { name: "Batch", selector: row => row.batch,sortable:true },
    { name: "Department", selector: row => row.department,sortable:true },
  ]

  return ( 
    <DashboadLayout childrens={
      <div className='flex flex-col w-full mx-5 my-5'>
      <div className="flex w-full justify-between mb-3">
        <h2 className='text-xl font-bold'>Student Details </h2>
        <button className="bg-gray-900 text-white rounded-md px-4 py-2" onClick={() => navigate("/addStudent")}>+ Add Student</button>
      </div>
      
      <div>
      {isLoading && <h1 className='text-4xl text-center text-black'>Loading...</h1>}
      {!!data && <Tables data={data} columns={columns}/>}
      </div>
    </div>
    }/>  
    
  )
}

export default Student