import React, { Component } from 'react'

class GetDerivedState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Score:100
      }
    }

    static  getDerivedStateFromProps(props, state)
    {
        return {
            Score :props.score
        }
    }
    
  render() {
    return (
      <div>
        <h1>Your score is {this.state.Score}</h1>
      </div>
    )
  }
}

export default GetDerivedState
