import { copConstants } from "../constants/cop";

export const searchCriminalReducer = (state = { cops: {} }, action) => {
  switch (action.type) {
    case copConstants.SEARCH_CRIMINAL_REQUEST:
      return {
        loading: true,
        cops: {},
      };

    case copConstants.SEARCH_CRIMINAL_SUCCESS:
      return {
        loading: false,
        cops: action.payload,
      };

    case copConstants.SEARCH_CRIMINAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case copConstants.SEARCH_CRIMINAL_RESET:
      return {
        loading: false,
        cops: {},
      };

    case copConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
