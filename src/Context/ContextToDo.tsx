import  { createContext, ReactNode, useEffect, useState } from "react"
import { TASK } from "../Lib/Interfaces";

type PROVIDER = {
    tasks: TASK[],
    completed: TASK[],
    AddTask: (newTodo: TASK) => void,
    removeTask: (id: number) => void,
    SetCompleted: (newTask: TASK) => void,
}

export const ToDoProvider = createContext<PROVIDER | null>(null)

const GetData  = localStorage.getItem('tasks')
const GetData2  = localStorage.getItem('completed')

const ContextToDo = ({children}:{children :ReactNode}) => {    
    const [tasks,setTasks] = useState<TASK[]>(GetData ? JSON.parse(GetData) : []);
    const [completed,setCompleted] = useState<TASK[]>(GetData2 ? JSON.parse(GetData2) : []);


    const AddTask = (newTodo: TASK) => {
        setTasks([...tasks, newTodo])
    }
    const removeTask = (id: number) => {
        let task = tasks.find(t => t.id === id)
        if(task){
            setTasks(tasks.filter((todo) => todo.id!==id))
        } else {
            task = completed.find(t => t.id === id)
            if(task){
                setCompleted(completed.filter((todo) => todo.id!==id))
            }
        }

    }
    const SetCompleted = (newTask:TASK)=>{
        const task = tasks.find(t => t.id === newTask.id)
        if(task){
            task.state = 'completed'
            setCompleted([...completed,task])
        }
        setTasks(tasks.filter(e => e.id!==newTask.id ))
    }
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    useEffect(()=>{
        localStorage.setItem('completed', JSON.stringify(completed))
    },[completed])
    return (
    <ToDoProvider.Provider value={{ tasks,completed,AddTask,removeTask,SetCompleted }}>
        {children}
    </ToDoProvider.Provider>
    )
}

export default ContextToDo