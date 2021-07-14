import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

  import { createBrowserHistory } from "history"

import Login from "../login/login"
import Todo from "../todo/todo"

export default props => (
    <Router history = {createBrowserHistory}>
        <Switch>
            <Route exact path='/todo' component={Todo}/>
            <Route path="/login" component={Login}/>
            <Redirect path="*" to="/login"/>
        </Switch>
    </Router>
)   