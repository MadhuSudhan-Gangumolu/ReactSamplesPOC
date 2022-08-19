import React from 'react'

function PropsDestructuring(props) {
  const {name, age } = props
  return (
    <div>
      <h1>I'm {name} at age {age}</h1>
    </div>
  )
}

export default PropsDestructuring
