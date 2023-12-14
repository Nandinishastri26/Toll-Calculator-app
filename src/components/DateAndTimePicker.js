import React,{useState} from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateAndTimePicker = () => {
    const[value,setValue]=useState(null)
  return (
    <DateTimePicker
  label="Now"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>
  )
}

export default DateAndTimePicker
