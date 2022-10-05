import React from "react";
import {
  GestureHandlerRootView,
  RectButtonProps,
} from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

const ConfirmButton: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
};
export default ConfirmButton;
