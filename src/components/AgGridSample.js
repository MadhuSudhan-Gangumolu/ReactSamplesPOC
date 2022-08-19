import React,  { useState, useRef, useEffect, useMemo, useCallback, Component}  from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

class AgGridSample extends Component {
    constructor()
    {
        super();
        this.state = {
            Data : new Array()
        };
    }
   
    componentDidMount()
    {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData =>
            {
                console.log(rowData)
                debugger;
                this.setState({
                    Data : rowData[1]
                })
            } )
        
            console.log(this.state.Data)
    }

    rowData = [
        {name:'madhu', age:23},
        {name:'Naresh', age:26},
        {name:'Mayuri', age:5},
        {name:'Uday', age:7},
        {name:'Kirshna', age:45},
        {name:'Kumari', age:33}
    ]

    columndata = {
        
    }
    
      
  render() {
    return (
      <div>
        {/* <AgGridReact/> */}
      </div>
    )
  }
}

export default AgGridSample
