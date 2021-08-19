import Todo from "./Todo"
const Todos = ({todoss}) => {
  

    
    return (
        <div>
            {todoss.map((todo)=>(
                <Todo todo ={todo}/>

            ))}
            
        </div>
    )
}

export default Todos
