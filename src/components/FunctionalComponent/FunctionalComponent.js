import React from "react";

const Sample = (props) => 
{
    return(
    <div>
        <h1> {process.env.REACT_APP_TITLE}</h1>
        {props.childern}
    </div>
    )
    
}

export default Sample;