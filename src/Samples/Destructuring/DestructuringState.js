import React, { Component } from 'react'

class DestructuringState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"SampleName",
         age:"65"
      }
    }
    
  render() {
    const {name, age} = this.state;
    return (
      <div>
        <h1>I'm {name} at Age {age}</h1>
      </div>
    )
  }
}

export default DestructuringState
