import React, { Component } from 'react'
import UpdateChild from './UpdateChild';

class UpdateParent extends Component {
  constructor(props) {
    super(props)
    console.log("Update Parent Constructor");
    this.state = {
       value:"Initial state"
    }
  }

  static  getDerivedStateFromProps(props, state)
    {
        console.log("Update Parent  getDerivedStateFromProps");
        return null;
    }
  

    render() {
        console.log("Update Parent Render");
    return (
      <div>
        <UpdateChild/>
      </div>
    )
  }

  shouldComponentUpdate()
  {
    console.log("Update Parent  shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("Update Parent  getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, state)
  {
    console.log("Update Parent  componentDidUpdate");
  }
}

export default UpdateParent
