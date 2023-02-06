import React from 'react';
import Card from './card';

const CardMenu = () => {
  return (
    <div className='grid mx-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <Card title={"Students"} count={5000}/>
        <Card title={"Teacher"} count={200}/>
        <Card title={"Colleges"} count={19}/>
        <Card title={"Department"} count={18}/>
    </div>
  )
}

export default CardMenu