
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const TakingInputNumber=()=>{
    const [num,setNum]=useState(0);
    const handleChange=(event)=>{
        setNum(event.target.value);
    }
    return(
        <div className='border-current'>
       
       


    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
      <TextField
        id="outlined-name"
        label="Number"
        value={num}
        onChange={handleChange}
      />

      
    </Box>
    <TextField
        id="outlined-name"
        // label="Number"
        value={num}
       
      />

        </div>

    )
}
export default TakingInputNumber;