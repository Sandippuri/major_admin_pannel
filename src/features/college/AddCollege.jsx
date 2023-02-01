import React from 'react'
import { useState } from 'react'
import Formfield from '../../components/ui/formfield'
import Textarera from '../../components/ui/textarera'

import { useAddCollegeMutation } from '../../redux-toolkit/apiSlices/college'

const AddCollege = () => {
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
      <div className='m-5 p-5 border-box w-full'>
      <h2 className="text-2xl text-gray-900 font-bold">Add Colleges here</h2>
      <p className="text-md text-gray-600">Please fill up the form below carefully to add your college.</p>
      <form className="grid grid-cols-3 gap-4 mt-5">
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"collegename"} title={"College Name"} placeholder={"Enter name of college"} required={true} />
        <Formfield value={collegeState.address} onChange={handleChange} className={'col-span-2'} name={"address"} type={"text"} id={"collegename"} title={"College Location"} placeholder={"Enter location of college"} required={true} />
        <Textarera value={collegeState.description} onChange={handleChange} className={'col-span-3'} name={"description"} type={"text area"} id={"collegename"} title={"Description"} placeholder={"Descriptions"} required={true} />
        <button className='bg-gray-900 text-white py-3 rounded-md w-2/3' type='button' onClick={handleSubmit}>Submit</button>      
      </form>
    </div>

    
  )
}

export default AddCollege