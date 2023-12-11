import React from 'react'
import TollCalculations from './TollCalculations'
import Map from './Map'


const MainPage = () => {
  return (
    <>
    <div className='flex items-center flex-col'>
    <h1 className='text-gray-800 text-3xl font-bold text-center my-3'>Toll Calculator App</h1>
    <div className='flex items-center my-7 px-5 py-3 justify-around'>
   <TollCalculations/>
   <Map/>
    </div> 
    </div>
    
    </>
    
  )
}

export default MainPage
