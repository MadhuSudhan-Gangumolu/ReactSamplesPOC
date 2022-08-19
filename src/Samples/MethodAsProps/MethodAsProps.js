import React, { Component } from 'react'

class MethodAsProps extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.ParentClick()}>Clic here to change parent Text</button>
      </div>
    )
  }
}

export default MethodAsProps
