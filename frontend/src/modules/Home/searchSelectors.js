import { createSelector } from "reselect";

export const selectHistory = ({ historyReducer }) => historyReducer.history;

export const selectSearchData = ({ searchResults }) =>
  searchResults.searchData || {};

export const selectSearchQuery = ({ searchResults }) => searchResults.query;

export const selectSearchDataListByValue = createSelector(
  [selectSearchData, selectSearchQuery],
  (data, query) => console.log(query) || (data[query] ? data[query].list : [])
);

export const selectSearchPage = createSelector(
  [selectSearchData, selectSearchQuery],
  (data, query) => (data[query] ? data[query].page : undefined)
);
