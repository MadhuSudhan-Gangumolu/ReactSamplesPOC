import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name : "Click button to text Change"
      }
    }

    handleClickEvent()
    {
        this.setState({
            Name : "Thank you for click"
        },
        () => {console.log(this.state.Name)})
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.Name}</h1>
        <button onClick={() => this.handleClickEvent()}>Click Me</button>
      </div>
    )
  }
}

export default State
