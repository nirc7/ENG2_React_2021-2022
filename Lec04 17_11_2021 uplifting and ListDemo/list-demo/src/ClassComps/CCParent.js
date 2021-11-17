import React, { Component } from 'react';
import CCChild from './CCChild'

export default class CCParent extends Component {

  getDataFromChild = (data) => {
    console.log('in parent from child=',  data);
  }


  render() {
    return (
      <div style={{ margin: 15 }}>
        <h2>Parent</h2>
        <CCChild id={7}  tellPapa={this.getDataFromChild}/>
      </div>
    )
  }
}
