import React from "react";

export default function FCPerson(props) {

  let num = 7;
  num++;
  let stam = props.id * 2;
  props.id=19;

  return (
    <div style={{
      margin: 20,
      fontSize: 35,
      color: 'yellowgreen'
    }}>FCPerson
      <div>Id:{props.id*3}</div>
      <div>Name:{props.name}</div>
      <div>num:{num}</div>
    </div>
  );
}