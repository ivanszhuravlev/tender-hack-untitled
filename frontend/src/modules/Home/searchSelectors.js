import { createSelector } from "reselect";

const selectSearchData = ({ searchResults }) => searchResults.searchData;

const selectSearchQuery = ({ searchResults }) => searchResults.query;

export const selectSearchDataByValue = createSelector(
  [selectSearchData, selectSearchQuery],
  (data, query) => data[query] || []
);
