import React from 'react'
import { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Formfield from '../components/ui/formfield'
import Textarera from '../components/ui/textarera'

import { useAddCollegeMutation } from '../RTK/slices/college'

const AddStudent = () => {
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
      <h2 className="text-2xl text-gray-900 font-bold">Add Students here</h2>
      <p className="text-md text-gray-600">Please fill up the form below carefully to add Students details</p>
      <form className="grid grid-cols-3 gap-4 mt-5">
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"studentname"} title={"Student Name"} placeholder={"Enter name of student"} required={true} />
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"id"} title={"Section"} placeholder={"Enter the section"} required={true} />
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"id"} title={"Roll No."} placeholder={"Enter the roll no."} required={true} />
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Are you a newly joined student</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
        
  
        <Textarera value={collegeState.description} onChange={handleChange} className={'col-span-3'} name={"description"} type={"text area"} id={"collegename"} title={"Description (Optional)"} placeholder={"Descriptions"} required={true} />
        <button className='bg-gray-900 text-white py-3 rounded-md w-2/3' type='button' onClick={handleSubmit}>Submit</button>      
      </form>
    </div>
  )
}

export default AddStudent