import React,{useState} from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateAndTimePicker = ({time,changeHandler}) => {
    const[value,setValue]=useState(time || null)
  return (
    <DateTimePicker
    name="time"
  label="Now"
  value={value}
  onChange={(newValue) => {
    setValue(newValue)
   changeHandler({ target: { name: "time", value: newValue } });
  }
}
/>
  )
}

export default DateAndTimePicker
