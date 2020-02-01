import { SAVE_SEARCH_DATA } from "./constants";
import { normalizeSearchData } from "./normalizer";

const initialState = {
  searchData: {},
  query: ""
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_SEARCH_DATA:
      // console.log("qot it", normalizeSearchData(payload.data));
      return {
        ...state,
        searchData: {
          ...state.searchData,
          [payload.query]: normalizeSearchData(payload.data)
        },
        query: payload.query
      };
    default:
      return state;
  }
};
