import React from 'react'
import "./menu.css"

export default props => (
    <div className="header--content">
        <div className="header--logo">
            <a href="">
                <img src="https://www.cauam.gov.br/wp-content/uploads/2018/02/agenda.png" alt="logo" />
            </a>
        </div>
        <div className="header--menu">
            <ul>
                <li>
                    <a href="/home">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT</a>
                </li>
            </ul>
        </div>
        <div className="header--creator">
            <span>Craete by: Caique Ramos</span>
        </div>
    </div>
)