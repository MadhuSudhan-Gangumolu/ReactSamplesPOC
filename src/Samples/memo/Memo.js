import React from 'react'

function Memo({id}) {
    console.log("Child Rendering");
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default React.memo(Memo)
