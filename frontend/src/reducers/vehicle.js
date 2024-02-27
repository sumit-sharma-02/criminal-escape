import { vehicleConstant } from "../constants/vehicle";

export const vehiclesReducer = (state = { vehicles: [] }, action) => {
    switch (action.type) {
      case vehicleConstant.FETCH_VEHICLES_REQUEST:
        return {
          loading: true,
          vehicles: [],
        };
  
      case vehicleConstant.FETCH_VEHICLES_SUCCESS:
        return {
          loading: false,
          vehicles: action.payload.vehicles,
        };
  
      case vehicleConstant.FETCH_VEHICLES_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case vehicleConstant.CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };