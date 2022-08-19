import React from 'react'

function MemoComponent(props) {
    console.log("Memo Component")
    function handleClickEvent()
    {
        console.log("Change Made");
    }
    
  return (
    <div>
        <p>{props.name}</p>
        <button onClick={handleClickEvent}>Button Clicks</button>
    </div>
  )
}


export default MemoComponent
