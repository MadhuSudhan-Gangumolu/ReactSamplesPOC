import React, { Component } from 'react'
import Memo from './Memo'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
  render() {
    console.log("Parent Rendering")
    return (
      <div>
        <Memo id={this.state.count}/>
        <button onClick={() => this.setState(() => ({count : this.state.count}))}>Click</button>
      </div>
    )
  }
}

export default Parent
