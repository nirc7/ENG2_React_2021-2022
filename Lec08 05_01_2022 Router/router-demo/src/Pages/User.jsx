import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function User() {
  const params = useParams();
  const { state } = useLocation();
  let userObj = state;
  return (
    <div> 
      <h2>User</h2>
      user id is : {params != null ? params.userId : 'no id'} <br /><br />

      user name from userObj is : {userObj != null ? userObj.userName : 'no name'} <br /> 
      user id from userObj is : {userObj != null ? userObj.userId : 'no id'}
    </div>
  )
}
