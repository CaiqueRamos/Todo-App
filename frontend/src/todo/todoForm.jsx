import React from "react"
import "./todoForm.css"

export default props => (
    <div className="form--body">
        <div className="form--content">
            <input type="text"  placeholder="Insira sua atividade"/>
        </div>
        <div className="form--action">
            <button onClick={props.handleAdd}>+</button>
        </div>
    </div>
)
    
