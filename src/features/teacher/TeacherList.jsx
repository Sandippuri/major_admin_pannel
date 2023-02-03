import React,{useState} from 'react';
import { useGetAllTeachersQuery } from '../../redux-toolkit/apiSlices/teacher';
import { useNavigate } from 'react-router-dom';
import Tables from '../../components/tables';
import AddTeacherModal from './components/addTeacherModal';

const TeacherList = () => {
  const [addTeacherModalOpen, setAddTeacherModalOpen] = useState(false);
    // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllTeachersQuery();
  const navigate = useNavigate()
  // const data = useSelector()
  
  console.log(data);
  const columns = [
    { name: "S No.", selector: row => row.id, sortable: true },
    { name: "Teacher name", selector: row => row.name, sortable: true },
    { name: "Post", selector: row => row.post,  sortable: true},
    { name: "Department", selector: row => row.department,  sortable: true},

  ]

  return (
    <>
    <div className='flex flex-col w-full mx-5 my-5'>
      <div className="flex w-full justify-between mb-3">
        <h2 className='text-xl font-bold'>Teacher Details </h2>
        <button className="bg-gray-900 text-white rounded-md px-4 py-2" onClick={()=>setAddTeacherModalOpen(true)}>+ Add Teacher</button>
      </div>
      
      <div>
      {isLoading && <h1 className='text-4xl text-center text-black'>Loading...</h1>}
      {!!data &&  <Tables data={data} columns={columns}/>}
      </div>
    </div>
     <AddTeacherModal
     isOpen={addTeacherModalOpen}
     closeModal={()=>setAddTeacherModalOpen(false)}
     />
   </>
  )
}

export default TeacherList