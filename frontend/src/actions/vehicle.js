import { vehicleConstant } from "../constants/vehicle";
import { server } from "../store";
import axios from "axios";

// Get all vehicles
export const getAllVehicles = () => async (dispatch) => {
  try {
    dispatch({
      type: vehicleConstant.FETCH_VEHICLES_REQUEST,
    });

    const requestConfig = {
      headers: {
        "Access-Control-Allow-Origin": "https://criminal-escape.vercel.app",
      },
    };

    const { data } = await axios.get(`${server}/vehicles`, requestConfig);

    dispatch({
      type: vehicleConstant.FETCH_VEHICLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: vehicleConstant.FETCH_VEHICLES_FAIL,
      payload: error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: vehicleConstant.CLEAR_ERRORS,
  });
};
