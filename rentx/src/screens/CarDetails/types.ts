import { ParamListBase, RouteProp } from "@react-navigation/native";
import { CarProps } from "../../components/CardCar/type";

export interface IRouter extends RouteProp<ParamListBase, string> {
  params: {
    carDetails: CarProps;
  };
}
