import React from "react"
import "./todoUser.css"
import User from "./icons/user.png"

export default props => (
    <div className="user--body">
        <div className="user--identity">
            <img src={User}/>
        </div>
        <div className="user--descriptions">
            <h3>Caique Ramos</h3>
            <h4>TADS - UFMS</h4>
            <h4>Web Developer</h4>
        </div>
    </div>
)