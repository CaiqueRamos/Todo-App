import React from "react"
import "./pageHeader.css"

export default props => (
    <div className="body--header">
        <h1>{props.name}</h1>
        <span>{props.small}</span>
    </div>
)