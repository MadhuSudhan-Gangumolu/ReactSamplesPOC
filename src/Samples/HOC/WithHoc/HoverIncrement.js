import React, { Component } from 'react'
import HocComponent from './HocComponent'

export class HoverIncrement extends Component {
    render() {
    return (
      <div>
        <h1 onMouseOver={() => this.props.increment()}> Mouse Hovered {this.props.count}</h1>
      </div>
    )
  }
}

export default HocComponent(HoverIncrement)
