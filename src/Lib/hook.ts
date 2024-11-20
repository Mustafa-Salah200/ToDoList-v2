import { useContext } from "react"
import { ToDoProvider } from "../Context/ContextToDo"


export function useToDoContext(){
    const context = useContext(ToDoProvider)
    if(!context){
        throw new Error('ToDoProvider is not available')
    }
    return context
}