import { copConstants } from "../constants/cop";
import { server } from "../store";
import axios from "axios";

// Search Criminal
export const searchCriminal =
  //   (copCity, copVehicle, copName) => async (dispatch) => {
  (copsDetails) => async (dispatch) => {
    try {
      dispatch({
        type: copConstants.SEARCH_CRIMINAL_REQUEST,
      });

      const requestConfig = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://criminal-escape.vercel.app",
        },
        withCredentials: true,
      };

        const { data } = await axios.post(
          `${server}/cop/search`,
        //   { cops: cop.city, copVehicle: cop.vehicle, copName: cop.name },
          { cops: copsDetails },
          requestConfig
        );

      dispatch({
        type: copConstants.SEARCH_CRIMINAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: copConstants.SEARCH_CRIMINAL_FAIL,
        payload: error,
      });
    }
  };

// Reset Cop
export const resetCops = () => async (dispatch) => {
  dispatch({
    type: copConstants.SEARCH_CRIMINAL_RESET,
  });
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: copConstants.CLEAR_ERRORS,
  });
};
