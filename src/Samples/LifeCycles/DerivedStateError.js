import React, { Component } from 'react'

class DerivedStateError extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         HasError : false
      }
    }
    
    static getDerivedStateFromError(error){
        console.error(error)
        return {
            HasError : true
        }
    }
  render() {
    return null
  }
}

export default DerivedStateError
