import {
  configureStore,
  combineReducers,
  // applyMiddleware,
} from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/city";
import { vehiclesReducer } from "./reducers/vehicle";
import { searchCriminalReducer } from "./reducers/cop";

let initialState = {};

const reducers = combineReducers({
  cities: citiesReducer,
  vehicles: vehiclesReducer,
  cop: searchCriminalReducer
});

const store = configureStore(
  {
    reducer: reducers,
    preloadedState: initialState,
  }
);

export const server = "https://criminal-escape-api.vercel.app/api/v1";
// export const server = "http://localhost:4000/api/v1";

export default store;
