import React from "react";
import "./components.css"

const digit = (value, updateFunction) => {
    //value for which digit this digit component will be
    //update function will update the parent component's value with the given value of the component on press

    return(
        <div className = 'digit' onClick={updateFunction(value)}>{value}</div>
    )
}

export default digit