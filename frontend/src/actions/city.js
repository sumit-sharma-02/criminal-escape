import { cityConstant } from "../constants/city";
import { server } from "../store";
import axios from "axios";

// Get all cities
export const getAllCities = () => async (dispatch) => {
  try {
    dispatch({
      type: cityConstant.FETCH_CITIES_REQUEST,
    });

    const requestConfig = {
      headers: {
        "Access-Control-Allow-Origin": "https://criminal-escape.vercel.app",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/cities`);

    dispatch({
      type: cityConstant.FETCH_CITIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: cityConstant.FETCH_CITIES_FAIL,
      payload: error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: cityConstant.CLEAR_ERRORS,
  });
};
