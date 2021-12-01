import React from 'react';

export default function FCPersonsData(props) {
  let { name } = props;

  const btnId2Del = () => {
    props.sendId(props.id);
  }

  return (
    <div>
      id={props.id} name={name} <button onClick={btnId2Del}>X</button>
    </div>
  )
}
