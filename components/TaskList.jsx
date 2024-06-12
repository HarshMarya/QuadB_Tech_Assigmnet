import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// This function is taking four props from TodoWrapper component one is task that is coming from input that user gives, second is toggleComplete which is use for toggle the task if is completed or not, third is editTodo which is a function and another is task in which we have todo useState value, and the last one is for deleteTodo which is use for delete the task

const TaskList = ({task, toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default TaskList
