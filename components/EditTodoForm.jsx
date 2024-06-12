import React, {useState} from 'react'

// This function is taking two props from TodoWrapper component one is editTodo which is a function and another is task in which we have todo useState value

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)
  function handleChange(e) {
    setValue(e.target.value)
  }

// The handleSubmit function for if we click update task then it will save the new edited task
  function handleSubmit(e) {
    e.preventDefault()

    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <input type='text' placeholder="Update Task" value={value} className='todo-input' onChange={handleChange}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
