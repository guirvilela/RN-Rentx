import { ITheme } from "./types";

export const changeHeaderColor = (headerColor: string) => {
  return {
    type: "CHANGE_HEADER_COLOR",
    payload: { headerColor },
  };
};
