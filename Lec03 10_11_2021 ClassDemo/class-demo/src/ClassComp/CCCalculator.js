import React, { Component } from "react";

export default class CCCCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  btnAddNums = () => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  cngTxt1 = (e) => {
    this.setState({ num1: parseInt(e.target.value) });
  }

  cngTxt2 = (e) => {
    this.setState({ num2: parseInt(e.target.value) });
  }
  render() {
    return (
      <div>
        <div>calc</div>
        <input type="text" onChange={this.cngTxt1} />
        <input type="text" onChange={this.cngTxt2} /> <br />
        <button onClick={this.btnAddNums} >+</button>
        <div>RESULT={this.state.result}</div>
      </div>
    );
  }

}