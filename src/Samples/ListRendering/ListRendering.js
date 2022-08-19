import React, { Component } from 'react'

class ListRendering extends Component {
  render() {
    const data = [10,20,30,40];
    return (
      <div>
        {
            data.map((d,index) => 
                <h1 key ={(d+20).toString()} index={index}>{d}</h1>
            )
        }
      </div>
    )
  }
}

export default ListRendering
