import { SAVE_SEARCH_DATA } from "./constants";
import { ApiService, ENDPOINTS } from "../../services/ApiService";

export const getSearchResults = searchQuery => async dispatch => {
  return dispatch({
    type: SAVE_SEARCH_DATA,
    payload: {
      data: await ApiService(ENDPOINTS.search)(searchQuery),
      query: searchQuery
    }
  });
};
