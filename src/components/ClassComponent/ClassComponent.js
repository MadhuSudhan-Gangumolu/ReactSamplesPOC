import React, {Component} from "react";

class ClassComponent extends Component
{
    render() {
        return (
          
            <ul>
            {
                (() =>{
                    let test = [];
                    for (let i=0;i<5;i++)
                    {
                        test.push(<li>Sample {i}</li>)
                    }
                    return test;

                })()
            }
            </ul>
          
        );
      }
}

export default ClassComponent;