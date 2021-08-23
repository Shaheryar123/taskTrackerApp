import { useState , useEffect } from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]) 
  useEffect(() => { 
    const getTasks = async() =>{
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }


    const addTask = (task)=>{
      const id = Math.floor(Math.random()*10000)+1
      const newTask = {id,...task}
      setTasks([...tasks,newTask])
    }

    const deleteTask =(id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
    }
    const toggleRemainder = (id) =>{
      setTasks(tasks.map((task)=> task.id === id ?{...task, remainder:! task.remainder }: task ))
  }
    
  return (
    <Router>
    <div>
     
       <Header title ='Task Tracker' onAdd = {()=>setShowAddTask(!showAddTask) } showAdd = {showAddTask}  />
      
      <Route path = '/' exact render = {(props)=>(
        <>
          {showAddTask &&  <AddTask  onAdd = {addTask}/>}
      {tasks.length >0 ? <Tasks tasks = {tasks} 
      deleteTask = {deleteTask} 
      onToggle = {toggleRemainder}/> : <h1>No task to show</h1>}

        </>
      )} />
      <Route path = '/about' component = {About} />
      <Footer />
       </div>
       </Router>
  );
}

export default App;
