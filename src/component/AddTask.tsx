import { useState } from "react"
import { useToDoContext } from "../Lib/hook"
import { TASK } from "../Lib/Interfaces"

const AddTask = () => {
    const [taskValue,setTaskValue] = useState('')
    const {AddTask} = useToDoContext()
    const [error,setError] = useState(false)

    const AddTOList = ()=>{
        if(taskValue.trim() === '' || taskValue === undefined){
            setError(true)
        } else {
            setError(false)
            const ob: TASK = {
                id: Date.now(),
                task: taskValue,
                state: 'pending'
            }
            AddTask(ob)
            setTaskValue('') //outline: 1px solid red;
        }
    }
  return (
    <div style={{marginTop : '50px'}}>
        <h1>TASK TRACKER</h1>
        <div className="input">
            <input
            style={{outline: error ? '1px solid red': 'none'}}
            onChange={(e)=> setTaskValue(e.target.value)}
            type="text" placeholder="What's on your mind today?" value={taskValue}/>
            <button onClick={AddTOList}>ADD</button>
        </div>
        {error && <span className="error">*Error: Empty user Input</span>}
    </div>
  )
}

export default AddTask