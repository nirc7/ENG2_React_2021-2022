
export default function FCPerson(props) {

  let num = 7;
  let name = 'no name';
  num += props.id;
  //props.id = 9;

  function btnAddOne() {
    num++;
    console.log(num);
  }

  const chgTxt = (e) => {
    console.log(e.target.value);
    name = e.target.value;
  }

  if (props.id !== 7) {
    return <div>im 8!!!</div>;
  }
  
  return (
    <div style={{
      border: 'solid green 2px',
      margin: 15,
      padding: 10,
      borderRadius: 10,
      fontSize: 25
    }}>
      <div>FCPerson</div>
      <div>ID = {props.id}</div>
      <div>Name = {props.name}</div>
      <div>Num = {num}</div>
      <button onClick={btnAddOne}  >Add One</button> <br />
      NAME:<input type="text" onChange={chgTxt} /> <br />
      <div>name={name}</div>
    </div>
  );
}