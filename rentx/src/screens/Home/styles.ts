import { FlatList } from "react-native";
import styled from "styled-components/native";
import { CarProps } from "../../components/CardCar/type";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCars = styled(
  FlatList as new () => FlatList<CarProps>
).attrs({
  contentContainerStyle: {
    backgroundColor: theme.colors.background_primary,
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
