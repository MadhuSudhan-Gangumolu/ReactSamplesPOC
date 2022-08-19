import React, { Component } from 'react'

class ConponentTest extends Component {

  render() {
    if(this.props.IsValid === 'false')
    {
        throw new Error("Not have access");
    }
    return (
      <div>
        <h1>Hello welcome</h1>
      </div>
    )
  }
}

export default ConponentTest
