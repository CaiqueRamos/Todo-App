import React, {Component} from 'react'
import "./todo.css"
import axios from "axios"

import TodoForm from './todoForm'
import TodoList from './todoList'
import TodoUser from "./todoUser"

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)

        this.refresh()
    }

    refresh(description = "") {

        const search = description ? `&description_regex=/${description}/` : ""
        axios.get(` ${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState( {...this.state, description: "", list: resp.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then( resp => this.refresh())
    }
    handleRemove(todo){
        axios.delete(` ${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh())
    }
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh())
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
                    <TodoForm 
                        handleChange={this.handleChange}
                        description={this.description}
                        handleAdd={this.handleAdd} 
                        handleSearch={this.handleSearch}
                    />
                    <TodoList 
                        list={this.state.list}
                        handleRemove={this.handleRemove}
                        handleMarkAsDone={this.handleMarkAsDone} 
                        handleMarkAsPending={this.handleMarkAsPending}
                    />
                    <div className="todo--footer">
                        <h1>Todolist<span>Caique Ramos</span></h1>
                    </div>
                </div>
            </div>
        )
    }
}
