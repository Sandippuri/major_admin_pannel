import React from 'react';
import CardMenu from './components/CardMenu';
import Notice from './components/noticeContainer';

const Dashboard = () => {
  return (
      <div className='flex flex-col'>
          <CardMenu/>
          <Notice/>
      </div>      
  )
}

export default Dashboard