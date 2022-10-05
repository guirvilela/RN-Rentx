import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import BackButton from "../../components/BackButton";
import { changeHeaderColor } from "../../store/modules/theme/action";
import theme from "../../theme";

import {
  Container,
  Header,
  Title,
  RentalPeriodContainer,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import { DayProps, MarkedDateProps } from "../../components/Calendar/types";
import {
  generateDisabledDates,
  generateInterval,
} from "../../components/Calendar/generateInterval";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { RentalPeriod } from "./types";
import { Alert } from "react-native";
import {
  changePeriodRent,
  changeStartAndEndRent,
} from "../../store/modules/car/action";
import { ICarProps } from "../../store/modules/car/types";
import { CarProps } from "../../components/CardCar/type";
import api from "../../server/api";
import HeaderScheduling from "../../components/HeaderScheduling";

const Scheduling: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const carDetails = useSelector<ICarProps, CarProps>(
    (state) => state.carDetails
  );
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [disabledDates, setDisabledDates] = useState<string[]>([]);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  useEffect(() => {
    getUnavaibleDates();
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(changeHeaderColor("light"));
    });

    return unsubscribe;
  }, [navigation]);

  const getUnavaibleDates = async () => {
    const scheduleByCar = await api.get(`/schedules_bycars/${carDetails.id}`);

    const disabled = generateDisabledDates(
      scheduleByCar.data.unavailable_dates
    );
    setDisabledDates(disabled);
    setMarkedDates(disabled);
  };

  const handleChangeDate = async (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    if (
      Object.keys(disabledDates).includes(start.dateString) ||
      Object.keys(disabledDates).includes(end.dateString)
    ) {
      return;
    }

    const invalidPeriod = Object.keys(disabledDates).some(
      (day) =>
        start.timestamp < Date.parse(day) && Date.parse(day) < end.timestamp
    );
    if (invalidPeriod) {
      start = end;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);

    setMarkedDates(() => ({
      ...disabledDates,
      ...interval,
    }));

    const firstDate = start.dateString;
    const endDate = end.dateString;

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  };

  const handleConfirmRental = () => {
    const markedDatesAvaible = Object.keys(markedDates).filter(
      (date) => markedDates[date].disabled === false
    );

    dispatch(
      changeStartAndEndRent([
        rentalPeriod.startFormatted,
        rentalPeriod.endFormatted,
        markedDatesAvaible.length,
      ])
    );

    dispatch(changePeriodRent(markedDatesAvaible));

    navigation.navigate("SchedulingDetails");
  };

  return (
    <Container>
      <HeaderScheduling
        title={"Escolha uma\ndata de início e\nfim do aluguel"}
        startFormatted={rentalPeriod.startFormatted}
        endFormatted={rentalPeriod.endFormatted}
        scheduling={true}
      />

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.startFormatted}
        />
      </Footer>
    </Container>
  );
};
export default Scheduling;
