import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const btnGo2User = () => {
    let userObj = {
      userId: 88,
      userName: 'avi'
    };

    navigate('user/77', { state: userObj });
  }


  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate('about')}  >go 2 about</button> <br />
      <button onClick={btnGo2User} >go 2 user with some data</button>
    </div>
  )
}
