import { useState } from "react"
import Header from './components/Header'
import Task from "./components/Task";
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:0,
            text:'Dr Appointment',
            day: '5th Feb',
            remainder: true
        },
        {
            id:1,
            text:'office',
            day: '8th Feb',
            remainder: true
        },
        {
            id:2,
            text:'Park Visit',
            day: '10th Feb',
            remainder: false
        }
    ])  

    const deleteTask =(id) =>{
      setTasks(tasks.filter((task)=> task.id !== id))
    }
    const toggleRemainder = (id) =>{
      setTasks(tasks.map((task)=> task.id === id ?{...task, remainder:! task.remainder }: task ))
  }
  return (
    <div>
    
    

      <Header title ='Props'/>
      {tasks.length >0 ? <Tasks tasks = {tasks} 
      deleteTask = {deleteTask} 
      onToggle = {toggleRemainder}/> : <h1>No task to show</h1>}
      
      </div>
  );
}

export default App;
