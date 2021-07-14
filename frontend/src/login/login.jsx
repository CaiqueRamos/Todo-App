import React from 'react'
import ImagemLogin from "./images/img-01.png"
import "./css/main.css"
import "./css/util.css"


export default props=> (

    <div>
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="form">
                        <span className="login100-form-title">
                            Member Login
                        </span>

                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="text" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" ></i>
                            </span>
                        </div>

                        <div className="wrap-input100 ">
                            <input className="input100" type="password" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" ></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <a href="/todo">
                                <button className="login100-form-btn" >
                                    Login
                                </button>
                            </a>
                        </div>

                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <a className="txt2" href="#">
                                Username / Password?
                            </a>
                        </div>

                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
)