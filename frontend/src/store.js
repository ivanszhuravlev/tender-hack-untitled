import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
