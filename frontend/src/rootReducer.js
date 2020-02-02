import { combineReducers } from "redux";
import { searchReducer } from "./modules/Home/searchReducer";

export const rootReducer = combineReducers({
  searchResults: searchReducer
});
