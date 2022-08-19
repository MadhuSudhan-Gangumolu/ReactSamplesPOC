import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         Text:'Sample'
      }
    }
    handleClick()
    {
        this.setState({
            Text:'Sample'
        }, () => console.log("Button Clicked"))
    }
    
  render() {
    console.log("Pure component Renderd")
    return (
      <div>
        <h1>{this.state.Text}</h1>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }
}

export default PureComponents
