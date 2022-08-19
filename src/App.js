import React, { Component } from 'react'
import './App.css'
import './Samples/ReactStyling/ReactStying.css'
import ConditionalRendering from './Samples/ConditionalRendering/ConditionalRendering'
import Child from './Samples/ExportSamples/Child'
import ListRendering from './Samples/ListRendering/ListRendering'
import MethodAsProps from './Samples/MethodAsProps/MethodAsProps'
import ReactStyling from './Samples/ReactStyling/ReactStyling'
import State from './Samples/State/State'
import MounitingParent from './Samples/LifeCycles/MounitingParent'
import UpdateParent from './Samples/LifeCycles/UpdateLifeCycle/UpdateParent'
import GetDerivedState from './Samples/LifeCycles/GetDerivedState'
import ShouldComponentUpdate from './Samples/LifeCycles/ShouldComponentUpdate'
import GetSnapshot from './Samples/LifeCycles/GetSnapshot'
import ComponentUnMount from './Samples/LifeCycles/ComponentUnMount'
import DerivedStateError from './Samples/LifeCycles/DerivedStateError'
import ConponentTest from './Samples/LifeCycles/ErrorBoundry/ConponentTest'
import ErrorBountry from './Samples/LifeCycles/ErrorBoundry/ErrorBountry'
import Fragments from './Samples/Fragments/Fragments'
import Fragment2 from './Samples/Fragments/Fragment2'
import PureComponents from './Samples/PureComponent/PureComponents'
import NormalComponent from './Samples/PureComponent/NormalComponent'
import Parent from './Samples/memo/Parent'
import ClassRefs from './Samples/Refs/ClassRefs'
import PortalParent from './Samples/Portals/PortalParent'
import ParentHOC from './Samples/HOC/WithHoc/ParentHOC'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Message:"ParentText",
       show : false
    }
  }

  handleChildClick()
  {
    this.setState({
      Message:"Click Event from child"
    })
  }

  
  
  render() {
    return (
      <div className='App'>
        {/* <ErrorBountry>
          <ConponentTest IsValid="true"/>
        </ErrorBountry>
        <ErrorBountry>
        <ConponentTest IsValid="false"/>
        </ErrorBountry> */}
        {/* <div className="App" onClick={() => console.log("Clicked")}>
      <h2>Click to open Modal</h2>
      <button onClick={() => this.setState({show : !this.state.show})}>Open Modal</button>
      <PortalParent show={this.state.show} closeModal={() => this.setState({show : false})} />
    </div>*/}
    <ParentHOC />
   
    
      </div> 
    )
  }
}

export default App
