import React, { Component } from 'react';

export default class Home extends Component {
    constructor()
    {
        super()
        this.state = {
            "name" : "arpit",
            "surname" : "viradiya"
        }
    }
  render() {
      const onChange = () =>
      {
          this.setState({"name":"viradiya","surname":"Arpit"})
      }
    return (
      <div>
          <h1>Hello - {this.state.name}</h1>
          <h2>{this.state.surname}</h2>
          <button onClick={onChange} >Click to Change</button>
      </div>
    )
  }
}
