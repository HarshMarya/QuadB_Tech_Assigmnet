import React, { useState } from "react";

//this function taking one prop from todoWrapper for getting input value of the input field
const TaskInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // this function is taking input value of input field
  function handleChange(e) {
    setValue(e.target.value);
  }

  // this function putting logic on submit if input field is empty then nothing will happen or if we put somthing in input field the task should be add
  function handleSubmit(e) {
    e.preventDefault();
    if (value == "") {
      null;
    } else {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="what is today's Task?"
        value={value}
        className="todo-input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
