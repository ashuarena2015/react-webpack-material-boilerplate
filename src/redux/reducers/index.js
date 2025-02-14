import { combineReducers } from "redux";
import todoListReducer from "./todolist";

const appReducer = combineReducers({
    todoListReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;