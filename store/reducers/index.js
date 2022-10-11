import { combineReducers } from "redux";
// import * as types from "../types.js";

// UPDATE NAME REDUCER
const updateNameReducer = (/**state = 0, { type }*/) => {
  return "test";
};

const reducers = { updateName: updateNameReducer };

export default combineReducers(reducers);
