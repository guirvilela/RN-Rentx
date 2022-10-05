import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 130px 32px 0px 32px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Steps = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StepNumber = styled.Text`
  font-size: ${RFValue(54)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.line};
`;

export const Title = styled.Text`
  width: 80%;
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 96px;
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SubTitle = styled.Text`
  width: 65%;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  line-height: 25px;
`;
