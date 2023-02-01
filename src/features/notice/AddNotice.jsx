import React from 'react'
import { useState } from 'react'
import Formfield from '../../components/ui/formfield'
import Textarera from '../../components/ui/textarera'
import DashboadLayout from '../components/Layour/DashboadLayout'

import { useAddCollegeMutation } from '../RTK/slices/college'

const AddNoticeel = () => {
  const [collegeState, setCollegeState] = useState({name: '', address: '', description: ''});
  const [addCollege,response]=useAddCollegeMutation();

  const handleChange = (e) => {
    setCollegeState({...collegeState, [e.target.name]: e.target.value})
  }

const handleSubmit=async (e) => {
  e.preventDefault();
  const res = await addCollege(collegeState);
  console.log(collegeState);
  console.log(res);
  console.log(response);
}

  return (
    <DashboadLayout childrens={
    <div className='m-5 p-5 border-box w-full'>
      <h2 className="text-2xl text-gray-900 font-bold">Add Notices here</h2>
      <p className="text-md text-gray-600">Please fill up the form below carefully to add Notices </p>
      <form className="grid grid-cols-3 gap-4 mt-5">
        <Formfield value={collegeState.name} onChange={handleChange} className={'col-span-1'} name={"title"} type={"text"} id={"name"} title={"Title"} placeholder={"Enter the notice"} required={true} />
        <Formfield onChange={handleChange} className={'col-span-1'} name={"date"} type={"date"}  id={"id"} title={"Date*"} placeholder={"Enter date in yyyy-mm-dd format"} required={true} />
        
    

        
        <Textarera value={collegeState.description} onChange={handleChange} className={'col-span-3'} name={"description"} type={"text area"} id={"name"} title={"Description (optional)"} placeholder={"Descriptions"} required={true} />
        <button className='bg-gray-900 text-white py-3 rounded-md w-2/3' type='button' onClick={handleSubmit}>Submit</button>      
      </form>
    </div>}/>
  )
}

export default AddNoticeel