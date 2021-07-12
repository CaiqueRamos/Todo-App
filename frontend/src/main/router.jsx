import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

  import { createBrowserHistory } from "history"

import About from "../about/about"
import Todo from "../todo/todo"

export default props => (
    <Router history = {createBrowserHistory}>
        <Switch>
            <Route exact path='/home' component={Todo}/>
            <Route path="/about" component={About}/>
            <Redirect path="*" to="/home"/>
        </Switch>
    </Router>
)   