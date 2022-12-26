import React from 'react';
import CardMenu from '../components/CardMenu';
import Notice from '../components/Notice';
import DashboadLayout from '../components/Layour/DashboadLayout';

const Homepage = () => {
  return (
    <DashboadLayout childrens={
      <div className='flex max-w-screen max-h-screen flex-col gap-2'>
          <CardMenu/>
          <Notice/>
      </div>
    }/>
      
  )
}

export default Homepage