import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todo = () => {
    const [list, setList] = useState([])

    const addListItem = item => {
        setList([item, ...list])
    }

    return (
        <div>
            <TodoForm onAddItem={addListItem}/>
            <TodoList list={list}/>
        </div>
    )
}

export default Todo