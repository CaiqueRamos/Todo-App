import React from "react"
import "./todoList.css"
import IconeDelete from "./icons/delete.png"
import IconeDone from "./icons/done.png"
import IconeRefresh from "./icons/refresh.png"

export default props => {

    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id} className="row--description">
                <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                    <button className="row--remove" onClick={() => props.handleMarkAsDone(todo)} >
                        <img src={IconeDone} alt="" />
                    </button>
                    <button className="row--remove" onClick={() => props.handleMarkAsPending(todo)} >
                        <img src={IconeRefresh} alt="" />
                    </button>
                    <button className="row--remove" onClick={() => props.handleRemove(todo)} >
                        <img src={IconeDelete} alt="" />
                    </button>
                </td>
            </tr>
        ))
    }
    return(
        <table className="list--body">
            <thead>
                <tr className='description'>
                    <th>Descrição</th>
                </tr>
                <tr className='actions'>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}