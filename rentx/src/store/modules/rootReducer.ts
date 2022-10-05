import { combineReducers } from "redux";
import carDetails from "./car/reduce";
import headerColor from "./theme/reduce";

export default combineReducers({
  headerColor,
  carDetails,
});
