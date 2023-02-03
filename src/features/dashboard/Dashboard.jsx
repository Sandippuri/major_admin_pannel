import React from 'react';
import CardMenu from '../../components/CardMenu';
import Notice from '../../components/Notice';

const Dashboard = () => {
  return (
      <div className='flex max-w-screen max-h-screen flex-col gap-2'>
          <CardMenu/>
          <Notice/>
      </div>      
  )
}

export default Dashboard