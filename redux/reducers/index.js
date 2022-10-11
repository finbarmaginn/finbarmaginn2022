import { combineReducers } from "redux";

// import * as types from "../types.js";
const initialState = {}
// UPDATE NAME REDUCER
function updateTodoReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
const reducers = { update: updateTodoReducer };

export default combineReducers(reducers);
