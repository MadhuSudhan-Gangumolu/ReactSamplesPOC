import React, { Component } from 'react'
import MountingChild from './MountingChild';

class MounitingParent extends Component {
    constructor(props) {
      super(props)
    
      console.log("Parent Constructor");
      this.state ={
        name:"madhu"
      }
    }

    static  getDerivedStateFromProps(props, state)
    {
        console.log("Parent  getDerivedStateFromProps");
        return null;
    }
    
    render() {
        console.log("Parent Render Maethod");
        return (
        <div>
            <MountingChild />
        </div>
        )
    }

    componentDidMount()
    {
        console.log("Parent Component DidMount")
    }
}

export default MounitingParent
