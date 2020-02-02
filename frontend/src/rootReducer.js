import { combineReducers } from "redux";
import { searchReducer } from "./modules/Home/searchReducer";
import { historyReducer } from "./modules/Home/historyReducer";

export const rootReducer = combineReducers({
  searchResults: searchReducer,
  historyReducer
});
