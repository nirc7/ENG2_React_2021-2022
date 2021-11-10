import React, { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    let num = 7; //local variable
    this.number = 8; //Field
    this.state =
    {
      id: 7,
      name: "avi"
    };
  }


  btnAddOne = () => {
    //this.state.id = 100; //ERROR!!!!!
    this.setState({
      id: 100,
      name: 'benny',
      age:30
    });
    //code...
    //this.setstate(....)
  }

  render() {

    return (
      <div style={{
        border: 'solid red 3px',
        margin: 10,
        padding: 5,
        fontSize: 25,
        color: 'yellow'
      }}>
        <div>CCStudent</div>
        <div>grade={this.props.grade}</div>
        <button onClick={this.btnAddOne}>Add One 2 Id</button>
        <div>id={this.state.id}</div>
        <div>name={this.state.name}</div>
        <div>age={this.state.age}</div>
      </div>

    );
  }
}