import React, { Component } from 'react'
import Unmount from './Unmount';

class ComponentUnMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         check : false
      }
    }

    componentWillUnmount()
    {
        console.log("Component Unmounted");
    }
    
  render() {
    return (
      <div>
        {this.state.check ?
        null :
        <Unmount/>}

        <button onClick={() => this.setState(() => ({check : true}))}>Click me</button>
      </div>
    )
  }
}

export default ComponentUnMount
