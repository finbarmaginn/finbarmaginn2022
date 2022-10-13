// import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {} from "./todoSlice.js";
// import styles from "./index.module.scss";
import { updateTodoData, addTodo } from "./todoSlice.js";

export const ToDo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onKeyUp={(e) => {
            dispatch(updateTodoData(e.target.value));
          }}
        />
        <button onClick={() => dispatch(addTodo())}>Add Todo</button>
      </form>

      <ul>!! Generate Todo List Here !!</ul>
    </>
  );
};
