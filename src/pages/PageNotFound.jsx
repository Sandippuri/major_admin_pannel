import React from 'react'
import Card from '../components/card'

const PageNotFound = () => {
  return (
    <Card title={'404'} errorMessage={''}>
        <h1 className='text-red-700 text-2xl text-center'>Page not available</h1>
    </Card>
  )
}

export default PageNotFound