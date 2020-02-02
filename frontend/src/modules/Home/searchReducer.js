import { SAVE_SEARCH_DATA, SET_SEARCH_QUERY } from "./constants";
import { normalizeSearchData } from "./normalizer";

const initialState = {
  searchData: {},
  query: ""
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_SEARCH_DATA:
      const statedQuery = state.searchData[payload.query];
      const prevList = statedQuery ? statedQuery.list : [];

      return {
        ...state,
        searchData: {
          ...state.searchData,
          [payload.query]: {
            list: [...prevList, ...normalizeSearchData(payload.data)],
            page: payload.page
          }
        },
        query: console.log('reducer', payload.query) || payload.query
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: payload
      };
    default:
      return state;
  }
};
