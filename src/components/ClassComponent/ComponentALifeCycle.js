import React, { Component } from 'react'
import ComponentBLifeCycle from './ComponentBLifeCycle';

class ComponentALifeCycle extends Component {
    constructor()
    {
        super();
        console.log("Component A Constructor");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("Component A getDerivedStateFromProps");
        return null;
    }

  render() {
    return (
      <div>
        <ComponentBLifeCycle/>
      </div>
    )
  }

  componentDidMount()
  {
    console.log("Component A componentDidMount")
  }
}

export default ComponentALifeCycle
