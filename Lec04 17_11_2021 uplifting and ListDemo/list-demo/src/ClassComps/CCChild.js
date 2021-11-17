import React, { Component } from 'react'

export default class CCChild extends Component {

  btnTellPapa = () => {
    this.props.tellPapa(77);
  }

  render() {
    return (
      <div>
        <h3>CHILD</h3>
        <div>id={this.props.id}</div>
        <button onClick={this.btnTellPapa}>tell Papa</button>
      </div>
    )
  }
}
