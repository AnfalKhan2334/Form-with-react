import { Typography, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function App() {
  let [input, setInput] = useState({
    name: "",
    Email: "",
    password: "",
    fname: "",
    education: "",
    city: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  let getData = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", input);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <Typography variant='h2'>
            M Anfal Khan  
          </Typography>
          <h1>Job Hiring</h1>
          <h2>Fill the form</h2>
          <TextField 
            id="outlined-name" 
            name="name" 
            label="Name" 
            placeholder='Name' 
            onChange={getData} 
            variant="outlined" 
          />
          <br /><br />
          <TextField 
            id="outlined-fname" 
            name="fname" 
            label="F Name" 
            onChange={getData} 
            variant="outlined" 
          />
          <br /><br />
          <TextField 
            id="filled-email" 
            name="Email" 
            label="Email" 
            onChange={getData} 
            variant="filled" 
          />
          <br /><br />

         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={input.password}
              onChange={getData}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <br /><br />
          <TextField 
            id="standard-education" 
            name="education" 
            label="Education" 
            onChange={getData} 
            variant="standard" 
          />
          <br /><br />
          <TextField 
            id="standard-city" 
            name="city" 
            label="City" 
            onChange={getData} 
            variant="standard" 
          />
          <br /><br />
          <Button variant="contained" color="success" type="submit">Submit</Button>
        </form>
      </div>
    </>
  )
}

export default App;
