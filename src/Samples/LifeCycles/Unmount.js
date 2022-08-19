import React, { Component } from 'react'

class Unmount extends Component {
    componentWillUnmount()
    {
        console.log("Component Unmounted");
    }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Unmount
