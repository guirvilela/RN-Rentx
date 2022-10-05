import styled from "styled-components/native";
import {
  RectButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const MyCarsButtonWrapper = styled(GestureHandlerRootView)`
  width: 100%;
  height: 60px;

  justify-content: center;
  align-items: flex-end;

  position: absolute;
  bottom: 13px;
  right: 22px;
`;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};
`;
