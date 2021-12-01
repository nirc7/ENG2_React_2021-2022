import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class FCNameInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: null
    }
  }


  chgTxtName = (e) => {
    let name = e.target.value;
    console.log('before=',this.state.name);
    
    this.setState({name  }
      ,()=>{
        console.log('callback=',this.state.name);
      });
    
      console.log('after=',this.state.name);
  }

  // const btnSendName2Main = () => {
  //   props.sendName(name);
  // }

  render() {
    console.log('render=',this.state.name);
    return (
      <div style={{
        border: 'blue 3px dashed',
        margin: 15, padding: 15,
        borderRadius: 15
      }}>
        Name: <input type="text" onChange={this.chgTxtName} /> <br />
        <button onClick={() => this.props.sendName(this.state.name)}>Add Person</button>
      </div>
    )
  }
}
