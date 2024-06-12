import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList.jsx";
import EditTodoForm from "./EditTodoForm.jsx";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // addTodo function is to give array of object of task
  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  // toggleCompleted function is convert every task completed value opposite to its real value
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // delete function is filter out or delete the task if they don't get the id
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // editTodo function switch the real value of is completed to false or true on click.
  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

// this return value return a div a TaskInput component which taskes task as a input and another is map function in which isEditing value is true then show EditTodoform also the value is false then show TaskList
  return (
    <div className="TodoWrapper">
      <h1>TODO APP</h1>
      <TaskInput addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <TaskList
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
