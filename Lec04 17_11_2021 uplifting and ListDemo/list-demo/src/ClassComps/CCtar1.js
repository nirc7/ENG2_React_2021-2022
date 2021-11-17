import React, { Component } from 'react'

const listPersons = [{ id: 1, name='avi' }, { id: 2, name='benny' }, { id: 3, name='charlie' }];

export default class CCtar1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: listPersons,
      count: listPersons.length + 1
    }
  }

  cngTxtName = (e) => {
    this.setState({ txtName: e.target.value });
  }

  btnAddPerson = () => {

    let newPersons = [...this.state.persons,
    {
      id: this.state.count,
      name: this.state.txtName
    }];

    let newCount = this.state.count + 1;
    this.setState({
      persons: newPersons,
      count: newCount
    });
  }

  delPerson = (pId) => {

    let newPersons = this.state.persons.filter(per => per.id !== pId);
    this.setState({
      persons: newPersons,
    });
  }

  render() {

    let listPersonsStr = this.state.persons.map(
      (per) =>
        <li key={per.id} class="list-group-item">id={per.id} name={per.name}
          <svg onClick={() => this.delPerson(per.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </li>
    );

    return (
      <div>
        Name: <input type="text" onChange={this.cngTxtName} />
        <button className="btn btn-success" onClick={this.btnAddPerson} >Add</button>
        <ul className="list-group">
          {listPersonsStr}
        </ul>
      </div>
    )
  }
}
