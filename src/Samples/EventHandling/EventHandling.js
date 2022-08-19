import React, { Component } from 'react'

class EventHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Text:"Welcome"
      }
    }
    
    handleClickEvent()
    {
        this.setState({
            Text:"Thanks For Subscribing"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Text}</h1>
        <button onClick={() => this.handleClickEvent()}>Subscribe</button>
      </div>
    )
  }
}

export default EventHandling
