import React from "react"
import "./todoUser.css"
import User from "./icons/user.png"

export default props => (
    <div className="user--body">
        <div className="user--identity">
            <img src={User}/>
        </div>
        <div className="user--descriptions">
            <span>Caique Ramos</span>
            <span>TADS - UFMS</span>
            <span>Web Developer</span>
        </div>
    </div>
)