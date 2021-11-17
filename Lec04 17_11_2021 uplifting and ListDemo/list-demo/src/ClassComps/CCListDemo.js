import React, { Component } from 'react'

const listPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class CCListDemo extends Component {

  render() {
    let peronsListStr = listPersons.map((per, ind) =>
      <a href="#"
        key={ind}
        className="list-group-item list-group-item-action">
        id={per.id} name={per.name} -- {ind}</a>
    );

    return (
      <div style={{ fontSize: 25 }}>
        <button type="button" className="btn btn-success">Success</button>
        <div className="list-group">
          {peronsListStr}
        </div>
      </div>
    )
  }
}
