import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputData: "",
  toDoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodoData: (state, action) => {
      action.payload;
    },
    addTodo: (state, action) => {
      action.payload;
    },
  },
});

export const { updateTodoData, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
