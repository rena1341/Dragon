import React from 'react'
import { useState } from 'react'
import "../CSS/Task.css"

const Task = () => {
    const [task, setTask] = useState('')
    return(
        <div className='frame'>
            <div className="task">タスクを設定する</div>
            <input className='taskInput' value={task} onChange={(e)=> setTask(e.target.value)}></input>
        </div>
    )
}

export default Task;