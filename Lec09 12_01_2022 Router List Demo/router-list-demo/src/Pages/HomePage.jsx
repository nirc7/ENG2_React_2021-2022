import React, { useEffect } from 'react';
import User from '../Classes/User';

export default function HomePage() {

  useEffect(() => {
    let users = JSON.parse(localStorage.users);
    console.log(users);
  }, [])


  return (
    <div>
      <h2>Home Page</h2>

    </div>
  )
}
