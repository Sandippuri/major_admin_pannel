import React from 'react';
import Noticeitem from './ui/noticeitem';
import Doughnutchart from './charts/doughnutchart';
import Areachart from './charts/areachart';
import Calender from './calender/calendar';
import { useNavigate } from 'react-router-dom';
import { useGetAllNoticesQuery } from '../redux-toolkit/apiSlices/notice';


const Notice = () => {
  const { data, isLoading } = useGetAllNoticesQuery();
  const navigate = useNavigate()
  // const data = useSelector()
  console.log(data);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-4'>
      <div className='flex flex-col w-full p-6 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md'>
        <div className="flex gap-3 mb-4">
          <svg className="w-8 h-8 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          <h2 className='text-2xl font-medium'>Notice</h2>
        </div>
        <div className=''>
          <div className="h-[80vh] flex flex-col overflow-scroll scrollbar-hide ">
            {data?.map((notice,key)=>{
              return <Noticeitem id={key} title={notice.description} date={notice.date}/>
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className='grid grid-cols-2 gap-3 w-full '>
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md py-3">
            <h1 className='text-2xl font-medium text-center mb-3'>Total Passing Stuents</h1>
            <Doughnutchart />
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md py-3">
            <Calender />
          </div>
          <div className='col-span-2 w-full p-6 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md'>
            <h1 className='text-2xl font-medium text-center mb-3'>Total Passing Stuents</h1>
            <Areachart />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Notice