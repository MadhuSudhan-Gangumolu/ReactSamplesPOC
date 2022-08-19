import React, { Component } from 'react'

class GetSnapshot extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log(`${prevState.count}`)
        return {
            count : prevState.count +20
        }
    }



    componentDidUpdate(prevProps, prevState, snap)
    {
        console.warn(snap)
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

export default GetSnapshot
