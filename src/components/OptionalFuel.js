import React from 'react'

const OptionalFuel = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <div className='w-full p-2 mx-4 my-3'>
          <h1 className='font-bold text-xl ml-3'>Edit your mileage (km/L)</h1>
        <table className='p-2 mx-4 my-3 ml-3'>
      <tr className='bg-gray-700 my-4'>
    <th>City</th>
    <th>Highway</th>
    </tr>
  <tr className='mx-2 my-2 justify-around items-center ' >
    <td className=''>
      <input className='border-b-4 border-gray-700 w-[75%]  float-right' type="number"/>
    </td>
    <td>
    <input className='border-b-4 border-gray-700  w-[75%]  float-right' type="number"/>
    </td>
  </tr>
</table>
 </div>  
        </div>
    
  )
}

export default OptionalFuel

