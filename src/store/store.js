import {combineReducers, createStore} from "redux";
import {catalogReducer} from "./reducer";

const rootReducer = combineReducers({catalogReducer})

export const store = createStore(rootReducer)