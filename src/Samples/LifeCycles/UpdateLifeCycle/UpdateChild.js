import React, { Component } from 'react'

class UpdateChild extends Component {
    constructor(props) {
        super(props)
        console.log("Update Child Constructor");
        this.state = {
           value:"Initial state"
        }
      }
    
      static  getDerivedStateFromProps(props, state)
        {
            console.log("Update Child  getDerivedStateFromProps");
            return null;
        }
      
        handleClick()
        {
            this.setState({
                value:"Final state"
            })
        }
    
        render() {
            console.log("Update Child Render");
        return (
          <div>
            <button onClick={this.handleClick.bind(this)}>Click me</button>
          </div>
        )
      }
    
      shouldComponentUpdate()
      {
        console.log("Update Child  shouldComponentUpdate");
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState)
      {
        console.log("Update Child  getSnapshotBeforeUpdate");
        return null;
      }
    
      componentDidUpdate(prevProps, prevState, state)
      {
        console.log("Update Child  componentDidUpdate");
      }
}

export default UpdateChild
