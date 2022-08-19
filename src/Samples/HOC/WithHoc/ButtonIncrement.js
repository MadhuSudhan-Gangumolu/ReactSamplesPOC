import React, { Component } from 'react'
import HocComponent from './HocComponent'

class ButtonIncrement extends Component {
    
  render() {
    return (
      <div>
        <button onClick={() => this.props.increment()}>button clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default HocComponent(ButtonIncrement)
