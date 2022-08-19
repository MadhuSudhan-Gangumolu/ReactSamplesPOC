import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    shouldComponentUpdate(prevProps, prevState)
    {
        console.log(`${prevState.count} is previous one`)
        return true;
    }

    componentDidMount()
    {
        console.log("Component Mount")
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState((prev) => ({count : prev.count + 1}))}>Increment</button>
      </div>
    )
  }
}

export default ShouldComponentUpdate
