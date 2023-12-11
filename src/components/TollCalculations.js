import React,{useState} from 'react'
import { SUPPORTED_VEHICLES } from '../utils/constants'
import OptionalFuel from './OptionalFuel'

const TollCalculations = () => {
  const[btn,setBtn]=useState(false)

  const handleClick=(e)=>{
    e.preventDefault();
   setBtn(!btn)
   console.log("btn")
  }
  return (
    <div className='flex justify-center mx-7 py-3 my-3  items-center'>

       <form className='w-full flex justify-center flex-col text-lg '>
        <input 
       type="text"
       placeholder='Enter address' 
       className='p-4 my-4 mx-4 w-full  bg-gray-700 rounded-lg text-white ' 
       autoComplete="none" /> 
       <input 
       type="text"
       placeholder='Enter address' 
       className='p-4 my-4 mx-4 w-full bg-gray-700 rounded-lg text-white ' 
       autoComplete="none" /> 
       <p className='p-2 my-2 mx-4'>Select Your Vehicle</p>
       <select className='p-3 my-3 mx-4 bg-gray-700 text-white rounded-md'>
       {SUPPORTED_VEHICLES.map((veh)=> (
              <option className='bg-white text-black' key={veh.identifier} value={veh.identifier}>
               {veh.name}
              </option>
            ))}
       </select>
       <button  className='p-2 mx-4 my-3 bg-gray-700 text-white rounded-md' onClick={handleClick}>
        -Optional Fuel Info  
       </button>
       {btn && (
       <OptionalFuel />
        )}
        
         </form>
     
    </div>
     )
}

export default TollCalculations
