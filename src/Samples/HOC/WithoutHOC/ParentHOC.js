import React, { Component } from 'react'
import ButtonIncrement from './ButtonIncrement'
import HoverIncrement from './HoverIncrement'

class ParentHOC extends Component {
  
    render() {
    return (
      <div>
        <ButtonIncrement/>
        <HoverIncrement/>
      </div>
    )
  }
}

export default ParentHOC
