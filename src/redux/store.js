import { 
  applyMiddleware,
  legacy_createStore as createStore,
  compose
} from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);
export default store;
