import produce from "immer";
import { Reducer } from "redux";
import { ITheme } from "./types";

const INITIAL_STATE: ITheme = {
  headerColor: "light",
};

const headerColor: Reducer<ITheme> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "CHANGE_HEADER_COLOR": {
        const { headerColor } = action.payload;
        return headerColor;
      }
      default: {
        return draft;
      }
    }
  });
};

export default headerColor;
