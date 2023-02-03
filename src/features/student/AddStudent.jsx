import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import Formfield from '../../components/ui/formfield'
import TextField from '@mui/material/TextField';
import Textarera from '../../components/ui/textarera'

import { useAddCollegeMutation } from '../RTK/slices/college'
import DashboadLayout from '../components/Layour/DashboadLayout'

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
const datelist = [
  { label: 2078 },
  { label: 2077 },
  { label: 2026 },
  { label: 2075 },
  { label: 2074 },
  { label: 2073 },
  { label: 2072 },
  { label: 2071 },
  { label: 2070 },
  { label: 2069 },
  { label: 2068 },
  { label: 2067},
  { label: 2066 },
  { label: 2065 },
  { label: 2064 },
  { label: 2063},
  { label: 2062 },
  { label: 2061 },
  { label: 2060},
  { label: 2059 },
  { label: 2058 },
  { label: 2057},
  { label: 2056 },
  { label: 2055 },

];

  return (
    <DashboadLayout childrens={
      <div className='m-5 p-5 border-box w-full'>
      <h2 className="text-2xl text-gray-900 font-bold">Add Students here</h2>
      <p className="text-md text-gray-600">Please fill up the form below carefully to add Students details</p>
      <form className="grid grid-cols-3 gap-4 mt-5">
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"studentname"} title={"Student Name"} placeholder={"Enter name of student"} required={true} />
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"id"} title={"Section"} placeholder={"Enter the section"} required={true} />
        <Formfield value={collegeState.name} onChange={handleChange} className={''} name={"name"} type={"text"} id={"id"} title={"Roll No."} placeholder={"Enter the roll no."} required={true} />
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={datelist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Batch" />}
      
    />
    
        
  
        <Textarera value={collegeState.description} onChange={handleChange} className={'col-span-3'} name={"description"} type={"text area"} id={"collegename"} title={"Description (Optional)"} placeholder={"Descriptions"} required={true} />
        <button className='bg-gray-900 text-white py-3 rounded-md w-2/3' type='button' onClick={handleSubmit}>Submit</button>      
      </form>
    </div>
    }/>
    
  )
}

export default AddStudent