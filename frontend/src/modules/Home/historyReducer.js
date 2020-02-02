import { SAVE_HISTORY } from "./constants";

const initialState = {
  history: []
};

export const historyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_HISTORY:
      return {
        ...state,
        history: [payload, ...state.history].slice(0, 3)
      };
    default:
      return state;
  }
};
