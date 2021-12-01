import React from 'react';
import FCPersonsData from './FCPersonsData';

export default function FCPersonsList(props) {

  const getId = (id) => {
    props.sendId2Main(id);
  }

  let personsStr = props.persons.map(per =>
    <FCPersonsData key={per.id} id={per.id} name={per.name} sendId={getId} />);

  return (
    <div style={{ fontSize: 25 }}>
      {personsStr}
    </div>
  )
}
