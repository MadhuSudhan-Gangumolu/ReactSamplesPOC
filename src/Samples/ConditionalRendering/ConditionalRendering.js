import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isDisplay: false
      }
    }
    
  render() {
    return (
      <div>
        <h1>This is Sample {this.state.isDisplay ? "Application" : "Project"}</h1>
      </div>
    )
  }
}

export default ConditionalRendering
