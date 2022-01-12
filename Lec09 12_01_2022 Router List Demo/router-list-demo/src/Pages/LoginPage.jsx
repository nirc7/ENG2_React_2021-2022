import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import { blue } from '@mui/material/colors';
import User from '../Classes/User';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [showErrLbl, setShowErrLbl] = useState(false);
  const navigate = useNavigate();

  const btnLogin = () => {

    if (localStorage.users !== undefined) {
      let users = JSON.parse(localStorage.users);
      let userFound = users.filter(user => user.email === email && user.pass === pass);
      console.log(userFound);
      if (userFound.length !== 0) {
        setShowErrLbl(false);
        navigate('/');
      }
      else {
        setShowErrLbl(true);
      }
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <div >
        <TextField id="standard-basic1" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} /> <br />
        <TextField id="standard-basic2" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Password" variant="standard" onChange={(e) => setPass(e.target.value)} type="password" /> <br />
        <IconButton aria-label="addperson" onClick={btnLogin}>
          <PersonAddAltTwoToneIcon sx={{ fontSize: 50, marginTop: 5, color: blue[200] }} />
        </IconButton>
        {showErrLbl && <h2 style={{ color: 'red' }}>Wrong Email or Password!!!</h2>}
      </div>
    </div>
  )
}

