import React, { Component } from 'react'


class ReactStyling extends Component {
  render() {
    const cls = 'header'
    return (
      <div>
        <h1 className={`${this.cls} jumbo`}>SampleHeading</h1>
      </div>
    )
  }
}

export default ReactStyling
