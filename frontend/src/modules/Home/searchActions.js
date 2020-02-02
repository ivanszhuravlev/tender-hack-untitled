import { SAVE_SEARCH_DATA, SET_SEARCH_QUERY } from "./constants";
import { ApiService, ENDPOINTS } from "../../services/ApiService";

export const getSearchResults = (searchQuery, passedPage) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const query = state.searchResults.searchData[searchQuery] || {};

  const page = query.page || passedPage;

  return dispatch({
    type: SAVE_SEARCH_DATA,
    payload: {
      data: await ApiService(ENDPOINTS.search)(searchQuery, page),
      query: searchQuery,
      page: page + 1
    }
  });
};

export const setSearchQuery = searchQuery => dispatch =>
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: searchQuery
  });
