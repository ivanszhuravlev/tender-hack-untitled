import { SAVE_SEARCH_DATA, SET_SEARCH_QUERY, SAVE_HISTORY } from "./constants";
import { ApiService, ENDPOINTS } from "../../services/ApiService";

export const getSearchResults = (searchQuery, passedPage) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const string = searchQuery || state.searchResults.query
  const query = state.searchResults.searchData[string] || {};

  const page = query.page || passedPage;

  return dispatch({
    type: SAVE_SEARCH_DATA,
    payload: {
      data: await ApiService(ENDPOINTS.search)(string, page),
      query: string,
      page: page + 1
    }
  });
};

export const setSearchQuery = searchQuery => dispatch =>
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: searchQuery
  });

export const saveToHistory = item => dispatch =>
  dispatch({ type: SAVE_HISTORY, payload: item });
