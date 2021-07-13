import React from "react"
import "./todoForm.css"
import Lupa from "./icons/lupa.png"

export default props => (
    <div className="form--body">
        <div className="form--content">
            <input type="text"  
            placeholder="Insira sua atividade" 
            value={props.description} 
            onChange={props.handleChange}
            />
        </div>
        <div className="form--actions">
            <div className="form--action">
                <button onClick={props.handleAdd}>+</button>
            </div>
            <div className="form--action search" >
                <button onClick={props.handleSearch}>search</button>
            </div>
        </div>
    </div>
)
    
