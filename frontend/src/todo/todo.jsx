import React, {Component} from 'react'
import "./todo.css"

import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoUser from "./todoUser"

export default class Todo extends Component {
    handleAdd() {
        console.log('add')
    }
    render(){
        return(
            <div>
                <div className="todo--user">
                    <TodoUser />
                </div>
                <div className="todo--body">
                    <div className="todo--title">
                        <h3>Tarefas<small>todo-list</small></h3>
                    </div>
                    <TodoForm handleAdd={this.handleAdd} />
                    <TodoList />
                    <div className="todo--footer">
                        <h1>Todolist<span>Caique Ramos</span></h1>
                    </div>
                </div>
            </div>
        )
    }
}