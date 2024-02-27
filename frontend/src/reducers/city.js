import { cityConstant } from "../constants/city";

export const citiesReducer = (state = { cities: [] }, action) => {
    switch (action.type) {
      case cityConstant.FETCH_CITIES_REQUEST:
        return {
          loading: true,
          cities: [],
        };
  
      case cityConstant.FETCH_CITIES_SUCCESS:
        return {
          loading: false,
          cities: action.payload.cities,
        };
  
      case cityConstant.FETCH_CITIES_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case cityConstant.CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };