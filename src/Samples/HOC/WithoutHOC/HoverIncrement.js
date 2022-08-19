import React, { Component } from 'react'

export class HoverIncrement extends Component {
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
        <h1 onMouseOver={() => this.handleIncrement()}> Mouse Hovered {this.state.count}</h1>
      </div>
    )
  }
}

export default HoverIncrement
