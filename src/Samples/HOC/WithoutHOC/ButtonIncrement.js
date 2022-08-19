import React, { Component } from 'react'

class ButtonIncrement extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleIncrement()
    {
        this.setState((prev) => ({
                count : prev.count+1
        }))
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement.bind(this)}>button clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ButtonIncrement
