import React from 'react'

export default function About() {
  let show=false;
  return (
    <div>
      <h2>About</h2>
      {show && <div>stam</div>}
    </div>
  )
}
