const TodoList = ({ list }) => {
    return (
        <ul>
            {
                list && list.map((item, index) => {
                    return (
                        <li key={`${item.id}`}>{item.text}</li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList