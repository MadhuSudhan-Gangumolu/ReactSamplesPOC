import React, { Component } from 'react'

class MountingChild extends Component {
    constructor(props) {
        super(props)
      
        console.log("Child Constructor");
        this.state= {
            name:"madhu"
          }
      }
  
      static  getDerivedStateFromProps(props, state)
      {
          console.log("Child  getDerivedStateFromProps");
          return null;
      }
      
      render() {
          console.log("Child Render Maethod");
          return (
          <div>
              
          </div>
          )
      }
  
      componentDidMount()
      {
          console.log("Child Component DidMount")
      }
}

export default MountingChild
