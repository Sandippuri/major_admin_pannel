import React from 'react'
import { ListItem } from './ui/listitems';
import SendIcon from '@mui/icons-material/Send';

const Sidebar = () => {
  return ( 
<aside className="w-64 h-[100vh]">
   <div className="h-full py-4 px-3 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-md font-medium text-black px-5 py-3">Main</h3>
      <ListItem 
      icon={<svg className="w-6 h-6 fill-current" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M326.6 104H110.4c-51.1 0-91.2 43.3-91.2 93.5V427c0 50.5 40.1 85 91.2 85h227.2c51.1 0 91.2-34.5 91.2-85V0L326.6 104zM153.9 416.5c-17.7 0-32.4-15.1-32.4-32.8V240.8c0-17.7 14.7-32.5 32.4-32.5h140.7c17.7 0 32 14.8 32 32.5v123.5l51.1 52.3H153.9z"/></svg>} 
      listTitle={"Dashboard"}
      navigate={"/"}/>
      

      <h3 className="text-md font-medium text-black px-5 py-3">Administration</h3>
     
      <ListItem 
      icon={<svg className="w-6 h-6 fill-current" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>} 
      listTitle={"Students"}
      navigate={"/students"}/>
     
      <ListItem 
      icon={<svg className="w-6 h-6 fill-current" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>} 
      listTitle={"Colleges"}
      navigate={"/colleges"}
      />

      <ListItem 
      icon={<svg className="w-6 h-6 fill-current" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M201.1 71.9c16.9-5 26.6-22.9 21.5-39.8s-22.9-26.6-39.8-21.5c-21.5 6.4-41.8 15.5-60.6 27C114.3 34 105.4 32 96 32C60.7 32 32 60.7 32 96c0 9.4 2 18.3 5.6 26.3c-11.5 18.7-20.6 39-27 60.6c-5 16.9 4.6 34.8 21.5 39.8s34.8-4.6 39.8-21.5c4.3-14.6 10.4-28.5 17.9-41.4c2 .2 4.1 .3 6.1 .3c35.3 0 64-28.7 64-64c0-2.1-.1-4.1-.3-6.1c12.9-7.5 26.8-13.6 41.4-17.9zm128-61.3c-16.9-5-34.8 4.6-39.8 21.5s4.6 34.8 21.5 39.8c14.6 4.3 28.5 10.4 41.4 17.9c-.2 2-.3 4.1-.3 6.1c0 35.3 28.7 64 64 64c2.1 0 4.1-.1 6.2-.3c7.5 12.9 13.6 26.8 17.9 41.4c5 16.9 22.9 26.6 39.8 21.5s26.6-22.9 21.5-39.8c-6.4-21.5-15.5-41.8-27-60.6c3.6-8 5.6-16.9 5.6-26.3c0-35.3-28.7-64-64-64c-9.4 0-18.3 2-26.3 5.6c-18.7-11.5-39-20.6-60.6-27zM71.9 310.9c-5-16.9-22.9-26.6-39.8-21.5s-26.6 22.9-21.5 39.8c6.4 21.5 15.5 41.8 27 60.6C34 397.7 32 406.6 32 416c0 35.3 28.7 64 64 64c9.4 0 18.3-2 26.3-5.6c18.7 11.5 39 20.6 60.6 27c16.9 5 34.8-4.6 39.8-21.5s-4.6-34.8-21.5-39.8c-14.6-4.3-28.5-10.4-41.4-17.9c.2-2 .3-4.1 .3-6.2c0-35.3-28.7-64-64-64c-2.1 0-4.1 .1-6.2 .3c-7.5-12.9-13.6-26.8-17.9-41.4zm429.4 18.3c5-16.9-4.6-34.8-21.5-39.8s-34.8 4.6-39.8 21.5c-4.3 14.6-10.4 28.5-17.9 41.4c-2-.2-4.1-.3-6.2-.3c-35.3 0-64 28.7-64 64c0 2.1 .1 4.1 .3 6.2c-12.9 7.5-26.8 13.6-41.4 17.9c-16.9 5-26.6 22.9-21.5 39.8s22.9 26.6 39.8 21.5c21.5-6.4 41.8-15.5 60.6-27c8 3.6 16.9 5.6 26.3 5.6c35.3 0 64-28.7 64-64c0-9.4-2-18.3-5.6-26.3c11.5-18.7 20.6-39 27-60.6zM192.8 256.8c0-15.6 5.6-29.9 14.9-41.1L223 231c6.6 6.6 17.8 1.9 17.8-7.4V163.2c0-5.7-4.7-10.4-10.4-10.4H169.9c-9.3 0-13.9 11.2-7.4 17.8l11.2 11.2c-17.9 19.8-28.9 46.2-28.9 75.1c0 43.6 24.9 81.3 61.1 99.8c11.8 6 26.3 1.4 32.3-10.4s1.4-26.3-10.4-32.3c-20.8-10.6-34.9-32.2-34.9-57zm93.1-58.6c20.8 10.6 34.9 32.2 34.9 57c0 15.6-5.6 29.9-14.9 41.1L290.6 281c-6.6-6.6-17.8-1.9-17.8 7.4v60.5c0 5.7 4.7 10.4 10.4 10.4h60.5c9.3 0 13.9-11.2 7.4-17.8l-11.2-11.2c17.9-19.8 28.9-46.2 28.9-75.1c0-43.6-24.9-81.3-61.1-99.8c-11.8-6-26.3-1.4-32.3 10.4s-1.4 26.3 10.4 32.3z"/></svg> } 
      listTitle={"Departments"}
      navigate={"/departments"}/>

      <ListItem 
      icon={<svg className="w-6 h-6 fill-current" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"/></svg>} 
      listTitle={"Teachers"}
      navigate={"/teachers"}/>

      <h3 className="text-md font-medium text-white px-5 py-3">News & Updates</h3>
      <ListItem icon={<SendIcon/>} listTitle={"Notices"}
      navigate={"/noticeels"} />
      <h3 className="text-md font-medium text-white px-5 py-3">Settings</h3>
      <ListItem icon={<SendIcon/>} listTitle={"Admin"}
      navigate={"/resetpassword"}/>
      
   </div>
</aside>

  )
}

export default Sidebar