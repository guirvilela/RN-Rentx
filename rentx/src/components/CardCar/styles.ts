import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import GasolineIcon from "../../assets/gasoline.svg";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 25px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const ImageCar = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
