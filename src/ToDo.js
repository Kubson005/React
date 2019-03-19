import React from "react"
import "./index.css"


function ToDo(props){
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p> {props.text} </p>
        </div>
    )
}

export default ToDo