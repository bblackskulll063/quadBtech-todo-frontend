import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import { todoReducers } from "./reducers/todoReducers";
import { tabReducer } from "./reducers/tabReducer";


const reducer = combineReducers({
  todos: todoReducers,
  currentTab: tabReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(
    reducer, 
    middleware
);


export default store;