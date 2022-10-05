import { CarProps } from "../../../components/CardCar/type";

export const changeCarData = (carData: CarProps) => {
  return {
    type: "CHANGE_CAR_DATA",
    payload: { carData },
  };
};

export const changePeriodRent = (periods: string[]) => {
  return {
    type: "CHANGE_PERIOD_RENT",
    payload: { periods },
  };
};

export const changeStartAndEndRent = (dates: string[]) => {
  return {
    type: "CHANGE_START_END_RENT",
    payload: { dates },
  };
};
