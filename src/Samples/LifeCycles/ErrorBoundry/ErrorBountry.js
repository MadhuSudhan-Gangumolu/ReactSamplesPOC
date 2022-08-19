import React, { Component } from 'react'

export class ErrorBountry extends Component {
    constructor(props) {
      super(props)
      this.state = {
         HasError : false
      }
    }
    
    static getDerivedStateFromError(error) {
        return {
            HasError : true
        }
    }
  render() {
    if (this.state.HasError)
    {
        return <h1>Some thing went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBountry
