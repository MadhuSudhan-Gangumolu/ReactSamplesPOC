import React, { Component } from 'react'
import FragmentDemo from './FragmentDemo'

class FragmentParent extends Component {
  render() {
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                </tr>
            </thead>
           <tbody>
                <tr>
                    <FragmentDemo/>
                </tr>
           </tbody>
        </table>
      </div>
    )
  }
}

export default FragmentParent
