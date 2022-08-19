import React, { Component } from 'react'
import StateExample from './StateExample'

class EventFromProps extends Component {
  
    render() {
    return (
      <div>
        <button onClick={this.props.PropsEvent}>PropsEvent</button>
      </div>
    )
  }
}

export default EventFromProps
