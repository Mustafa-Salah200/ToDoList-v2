import { useState } from "react"
import Tasks from "./component/Tasks"
import AddTask from "./component/AddTask"
import { useToDoContext } from "./Lib/hook"

const App = () => {
  const [options,setOptions] = useState<'pending' | 'completed'>('pending')
  const {tasks} = useToDoContext()
  const {completed} = useToDoContext()
  const {RemoveAll} = useToDoContext()

  const Pending = ()=>{
    setOptions('pending')
  }
  const Completed = ()=>{
    setOptions('completed')
  }



  return (
    <div className="container">
      <AddTask />
      <div className="toDo">
        <div className={`${options === 'pending' && 'active'}`} onClick={Pending}>
          <h4>PENDING TASKS[{tasks.length}]</h4>
        </div>
        <div className={`${options === 'completed' && 'active'}`} onClick={Completed}>
          <h4>COMPLETED TASKS[{completed.length}]</h4>
        </div>
      </div>
        <Tasks Tasks={options === 'pending' ? tasks : completed} />
        
        <button className="clear" onClick={()=> RemoveAll(options)}>CLEAR ALL</button>
    </div>
  )
}

export default App