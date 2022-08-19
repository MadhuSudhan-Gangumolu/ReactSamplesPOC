import React, { Component } from 'react'

export class NormalComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Text:'Sample'
        }
      }
    handleClick()
    {
        this.setState({
            Text:'Sample'
        }, () => console.log("Button Clicked"))
    }
    
  render() {
    console.log("Normal component Renderd")
    return (
      <div>
        <h1>{this.state.Text}</h1>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }
}

export default NormalComponent
