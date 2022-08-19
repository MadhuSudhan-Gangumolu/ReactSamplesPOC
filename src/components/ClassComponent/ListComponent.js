import React, { Component } from 'react'

class ListComponent extends Component {
    personList = ["Madhu", "Sudhan", "Gangumolu"];
  render() {
    return (
      <div>
        {
            this.personList.map(name => <h1 key={name}>{name}</h1>)
        }
      </div>
    )
  }
}

export default ListComponent
