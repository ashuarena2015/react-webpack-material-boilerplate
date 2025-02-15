import { combineReducers } from "redux";
import todoListReducer from "./todolist";
import usersReducer from "./users";

const appReducer = combineReducers({
    todoListReducer,
    usersReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;