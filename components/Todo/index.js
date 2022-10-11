// import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {} from "./todoSlice.js";
// import styles from "./index.module.scss";
import { updateTodoData, addTodo } from "./todoSlice.js";

export function ToDo() {
  const dispatch = useDispatch();

  return (
    <>
      <h3>To Do List</h3>
      <form>
        <input type='text' onKeyUp={() => dispatch(updateTodoData())} />
        <button onClick={() => dispatch(addTodo())}>
          Add Todo
        </button>
      </form>

      <ul>!! Generate Todo List Here !!</ul>
    </>
  );
}
