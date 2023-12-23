import React,{useState} from 'react'
import { SUPPORTED_VEHICLES } from '../utils/constants'
import OptionalFuel from './OptionalFuel'

const TollCalculations = () => {
  const[btn,setBtn]=useState(false);
  const[info,setInfo]=useState(
    {
      address1:"",
      address2:"",
      vehicle:"",
      city:"",
      highway:"",
      fuelPrice:"",
      time:"",
   }
  );

  const handleClick=(e)=>{
    e.preventDefault();
   setBtn(!btn)
   console.log("btn")
  }

  const changeHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setInfo((prevInfo)=>({
  ...prevInfo,
  [name]:value,
  }))
  }

  const submitHandler=(e)=>{
    e.preventDefault();
   console.log("info",info);
   setInfo({
      address1:"",
      address2:"",
      vehicle:"",
      city:"",
      highway:"",
      fuelPrice:"",
      time:"",
   })
  
  }
  return (
    <div className='flex justify-center mx-7 py-3 my-3  items-center'>

       <form onSubmit={submitHandler} className='w-full flex justify-center flex-col text-lg bg-orange-100'>
        <input 
       type="text"
       name="address1"
       value={info.address1}
       onChange={changeHandler}
       placeholder='Enter address' 
       className='p-4 my-4 mx-4  bg-gray-700 rounded-lg text-white ' 
       autoComplete="none" /> 
       <input 
       type="text"
       name="address2"
       value={info.address2}
       onChange={changeHandler}
       placeholder='Enter address' 
       className='p-4 my-4 mx-4  bg-gray-700 rounded-lg text-white ' 
       autoComplete="none" /> 
       <p className='p-2 my-2 mx-4 '>Select Your Vehicle</p>
       <select className='p-3 my-3 mx-4 bg-gray-700 text-white rounded-md'
         name="vehicle" 
         value={info.vehicle}
         onChange={changeHandler}
       >
       {SUPPORTED_VEHICLES.map((veh)=> (
              <option  
              className='bg-white text-black' key={veh.identifier} value={veh.identifier}>
               {veh.name}
              </option>
            ))}
       </select>
       <button  className='p-2 mx-4 my-3 bg-gray-700 text-white rounded-md' onClick={handleClick}>
        -Optional Fuel Info  
       </button>
       {btn && (
       <OptionalFuel info={info} changeHandler={changeHandler}/>
        )}

        <button className=' bg-gray-700 text-white rounded-lg cursor-pointer my-4 mx-2 p-2'>
          Submit</button>
        </form>
     
    </div>
     )
}

export default TollCalculations
