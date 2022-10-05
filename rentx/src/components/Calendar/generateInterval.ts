import { eachDayOfInterval, format } from "date-fns";

import { DayProps, MarkedDateProps } from "./types";
import theme from "../../theme";
import { getPlatformDate } from "../../utils/getPlatformDate";

export const generateInterval = (start: DayProps, end: DayProps) => {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        disabled: false,
        disabledTouchEvent: false,
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
};

export const generateDisabledDates = (dates: string[]) => {
  let disabledDates: MarkedDateProps = {};

  dates.forEach((date) => {
    disabledDates = {
      ...disabledDates,
      [date]: {
        disabled: true,
        color: "#fff",
        textColor: theme.colors.shape,
        disabledTouchEvent: true,
      },
    };
  });

  return disabledDates;
};
