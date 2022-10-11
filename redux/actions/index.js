import * as types from "./types.js.js";

export function updateTodoField(payload) {
  return {
    type: types.UPDATE_TODO,
    payload,
  };
}

export function addTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload,
  };
}

export function toggleTodo(payload) {
  return {
    type: types.TOGGLE_TODO,
    payload,
  };
}

export function removeTodo(payload) {
  return {
    type: types.REMOVE_TODO,
    payload,
  };
}
