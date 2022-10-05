import { legacy_createStore as createStore } from "redux";
import { CarProps } from "../components/CardCar/type";
import rootReducer from "./modules/rootReducer";
import { ITheme } from "./modules/theme/types";

const store = createStore(rootReducer);

export interface IState {
  headerColor: ITheme;
  carData: CarProps;
}

export default store;
