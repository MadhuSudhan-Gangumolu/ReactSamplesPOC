import React, { PureComponent } from 'react'

class SamplePureComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "Hello"
      }
    }

    handleButtonClick()
    {
        this.setState({
            Message : "Hello world"
        })
    }
    
  render() {
    console.log("Component Rendered");
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={this.handleButtonClick.bind(this)}>ChangeText</button>
      </div>
    )
  }
}

export default SamplePureComponent
