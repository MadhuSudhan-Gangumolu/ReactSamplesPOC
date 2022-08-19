import React, { Component } from 'react'
import Child2 from './Child2'

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Iam Child 1</h1>
        <Child2/>
      </div>
    )
  }
}

export default Child
