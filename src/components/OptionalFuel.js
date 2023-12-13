import React from 'react'

const OptionalFuel = () => {
  return (
    <div className='flex flex-col'>
        <div className='  items-center justify-center w-full p-2 mx-4 my-3 '>
          <h1 className='font-bold text-xl ml-3'>Edit your mileage (km/L)</h1>
        <table className='p-2 mx-4 my-3 ml-3 border border-black'>
      <tr className='bg-gray-700 my-4 h-12'>
    <th>City</th>
    <th>Highway</th>
    </tr>
  <tr className='mx-2 my-2 justify-around items-center ' >
    <td className='mx-2 px-2'>
      <input className='border-b-4 border-gray-700 w-[75%]  float-left' type="number"/>   
    </td>
    <td>
    <input className='border-b-4 border-gray-700  w-[75%]  float-right' type="number"/>
    </td>
  </tr>
</table>
 </div>  
 <div className='ml-9'>
  <p className='text-xl font-bold '>Enter Fuel Price</p>
  <input className='border-b-2 border-gray-700 w-[12%] ' type="number"/>
  <span>₹ per liter</span>
 </div>
        </div>
    
  )
}

export default OptionalFuel

