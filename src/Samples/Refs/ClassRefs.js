import React, { Component } from 'react'
import ForwardRef from './ForwardRef';

class ClassRefs extends Component {
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef();
      this.inputref2 = React.createRef();
    }

    componentDidMount()
    {
        this.inputref.current.focus();
        this.inputref2.current.value = "Madhu"
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputref} />
        <p>Child input</p>
        <ForwardRef ref={this.inputref2}/>
      </div>
    )
  }
}

export default ClassRefs
