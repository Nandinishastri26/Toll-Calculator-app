import React from 'react'
import MainPage from './components/MainPage'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
      <MainPage/>
      </div>
     
    </LocalizationProvider>
    
  )
}

export default App
