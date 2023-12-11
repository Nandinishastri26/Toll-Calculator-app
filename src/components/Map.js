import React from 'react'
import { MAP_URL } from '../utils/constants'

const Map = () => {
  return (
    <div className='w-1/2 mx-7 my-5 py-3'>
      <img className='w-full' src={MAP_URL} alt="map-img"/>
    </div>
  )
}

export default Map
