const Todo = ({todo}) => {
    return (
        <div>
            <h1>Work from Todo{todo.work}</h1>
            <p>{todo.time}</p>
        </div>
    )
}

export default Todo
