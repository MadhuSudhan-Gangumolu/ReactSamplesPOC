import React from "react";

const HocComponent = (OriginalComponent) => {
    class WrappedComponent extends React.Component
    {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          handleIncrement()
          {
              this.setState((prev) => ({
                      count : prev.count+1
              }))
          }
        render()
        {

            return(
                <OriginalComponent count={this.state.count} increment = {this.handleIncrement.bind(this)}/>
            )
        }
    }

    return WrappedComponent;
}

export default HocComponent;