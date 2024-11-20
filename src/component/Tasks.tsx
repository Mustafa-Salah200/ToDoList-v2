import { TASK } from "../Lib/Interfaces"
import Task from "./Task"

const Tasks = ({Tasks}: {Tasks: TASK[]}) => {
    return (
    <div>
        <p>You have {Tasks.length} tasks</p>
        <div className="tasks">
            {Tasks.map(task => {
                return <Task key={task.id} task={task}/>
            })}
        </div>
    </div>
    )
}

export default Tasks