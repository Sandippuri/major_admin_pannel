import React, { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllNoticeelsQuery } from '../RTK/slices/noticeel';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/card';
import DashboadLayout from '../components/Layour/DashboadLayout';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const Noticeel = () => {
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllNoticeelsQuery();
  const navigate = useNavigate()
  // const data = useSelector()
  console.log(data);
  const columns = [
    { title: "Date", field: "date" },
    { title: "Description", field: "description" },
  ]

  return ( 
    <DashboadLayout childrens={
      <div className='flex flex-col w-full mx-5 my-5'>
      <div className="flex w-full justify-between mb-3">
        <h2 className='text-xl font-bold'>Notice </h2>
        <button className="bg-gray-900 text-white rounded-md px-4 py-2" onClick={() => navigate("/addNoticeel")}>+ Add Notice</button>
      </div>
      
      <div>
      {isLoading && <h1 className='text-4xl text-center text-black'>Loading...</h1>}
      {!!data && <MaterialTable
        columns={columns}
        icons={tableIcons}
        title="Noticeels"
        data={data.map(o => ({ ...o }))}  
        options={{ exportButton: true, exportAllData: true, addRowPosition: "first", actionsColumnIndex: 1, pageSize:10 }}
      />}
      </div>

    </div>
    }/>  
    
  )
}

export default Noticeel