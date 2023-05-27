import React,{useState, useEffect} from "react";
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Grid from '@mui/material/Grid';
import  moment from 'moment';
import { subMonths } from 'date-fns';
function UserData() {
  const [month,setMonth]=useState(1);
  const [startDate,setStartDate]=useState(new Date());
   const [endate,setEnddate]=useState(subMonths(startDate, month))
  console.log(month,endate,'2323')
  const handleChange=(e:any)=>{
    console.log( typeof (e.target.value),'23')
    setMonth(e.target.value)
    
  }
  useEffect(()=>{
    setEnddate(subMonths(startDate, month)) 

  },[month])
 
  // alternative way to substact date 
//   const [startDate,setStartDate]=useState({dat:new Date(),mon:1});
//   const [endate,setEnddate]=useState(subMonths(startDate.dat, startDate.mon))

//  const handleChange=(e:any)=>{
  
//    setStartDate({...startDate, mon:e.target.value})
   
//  }
//  useEffect(()=>{
//    setEnddate(subMonths(startDate.dat, startDate.mon))
//  },[startDate])
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>

      <Card sx={{ width: 500, m: 2 }}>
        <CardContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
            </DemoContainer>
          </LocalizationProvider>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Age"
          onChange={handleChange}
        >
         <MenuItem value={1}>1 Month</MenuItem>
          <MenuItem value={3}>3 Month</MenuItem>
          <MenuItem value={6}>6 month</MenuItem>
          <MenuItem value={9}>9 month</MenuItem>
          <MenuItem value={12}>1 year</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default UserData    
