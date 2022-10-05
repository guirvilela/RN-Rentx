import React from "react";
import BackButton from "../BackButton";
import ArrowIcon from "../../assets/arrow.svg";

import {
  DateInfo,
  DateTitle,
  DateValue,
  Header,
  RentalPeriodContainer,
  SubTitle,
  Title,
} from "./styles";
import theme from "../../theme";
import { RentalPeriod } from "../../screens/Scheduling/types";

interface IHeaderScheduling extends RentalPeriod {
  title: string;
  scheduling?: boolean;
}

const HeaderScheduling: React.FC<IHeaderScheduling> = ({
  scheduling,
  endFormatted,
  startFormatted,
  title,
}) => {
  return (
    <Header>
      <BackButton color={theme.colors.shape} />
      <Title>{title}</Title>

      {scheduling ? (
        <RentalPeriodContainer>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!startFormatted}>{startFormatted}</DateValue>
          </DateInfo>

          <ArrowIcon />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!endFormatted}>{endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriodContainer>
      ) : (
        <SubTitle>Conforto, segurança e particidade;</SubTitle>
      )}
    </Header>
  );
};
export default HeaderScheduling;
