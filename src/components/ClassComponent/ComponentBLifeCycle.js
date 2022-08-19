import React, { Component } from 'react'

class ComponentBLifeCycle extends Component {
    constructor()
    {
        super();
        console.log("Component B Constructor");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("Component B getDerivedStateFromProps");
        return null;
    }

  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    )
  }

  componentDidMount()
  {
    console.log("Component B componentDidMount")
  }
}

export default ComponentBLifeCycle
