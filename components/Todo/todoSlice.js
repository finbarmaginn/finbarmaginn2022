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
      state.inputData += action.payload;
      console.log(state)

    },
    addTodo: (state, action) => {
      action.payload;
    },
  },
});

export const { updateTodoData, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
