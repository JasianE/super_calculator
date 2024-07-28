import React from "react";
import "./components.css"

const digit = (value, updateFunction, type) => {
    //value for which digit this digit component will be
    //update function will update the parent component's value with the given value of the component on press
    function helperFunction(){
        updateFunction(value, type)
    }
    return(
        <div className = 'digit' onClick={helperFunction}>{value}</div>
    )
}

export default digit