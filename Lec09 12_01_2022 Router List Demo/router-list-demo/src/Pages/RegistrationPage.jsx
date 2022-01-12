import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import { blue } from '@mui/material/colors';
import User from '../Classes/User';
import {  useNavigate } from 'react-router-dom';


export default function RegistrationPage() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [name, setName] = useState(null);
  const [grade, setGrade] = useState(0);
  const navigate = useNavigate();

  const btnAddUser = () => {
    let u = new User(email, pass, name, grade);
    //let users = JSON.parse(localStorage.getItem('users')) || [] ;

    if (localStorage.users !== undefined) {
      let users = JSON.parse(localStorage.users);
      let newUsers = [...users, u];
      localStorage.users = JSON.stringify(newUsers);
    }
    else {
      localStorage.users = JSON.stringify([u]);
    }
    navigate('/');
  }

  return (
    <div>
      <h2>Registration Page</h2>
      <div >
        <TextField id="standard-basic1" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} /> <br />
        <TextField id="standard-basic2" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Password" variant="standard" onChange={(e) => setPass(e.target.value)} type="password" /> <br />
        <TextField id="standard-basic3" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} /> <br />
        <TextField id="standard-basic4" style={{ margin: 10 }}
          sx={{ input: { color: 'white' }, label: { color: blue[200] } }}
          color="warning" label="Grade" variant="standard" onChange={(e) => setGrade(e.target.value)} type="number" /> <br />
        <IconButton aria-label="addperson" onClick={btnAddUser}>
          <PersonAddAltTwoToneIcon sx={{ fontSize: 50, marginTop: 5, color: blue[200] }} />
        </IconButton>
      </div>
    </div>
  )
}


