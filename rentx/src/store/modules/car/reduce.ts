import produce from "immer";
import { Reducer } from "redux";
import { ICarProps } from "./types";

const INITIAL_STATE: ICarProps = {
  carDetails: {
    id: "",
    name: "",
    thumbnail: "",
    fuel_type: "gasoline_motor",
    brand: "",
    about: "",
    photos: [],
    accessories: [],
    dates: [],
    periods: [],
    rent: {
      period: "",
      price: 0,
    },
  },
};

const carDetails: Reducer<ICarProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "CHANGE_CAR_DATA": {
        const { carData } = action.payload;
        return carData;
      }
      case "CHANGE_PERIOD_RENT": {
        const { periods } = action.payload;
        return {
          ...draft,
          periods,
        };
      }
      case "CHANGE_START_END_RENT": {
        const { dates } = action.payload;
        return {
          ...draft,
          dates,
        };
      }
      default: {
        return draft;
      }
    }
  });
};

export default carDetails;
