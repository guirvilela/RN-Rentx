import React from "react";
import { ActivityIndicator } from "react-native";
import {
  GestureHandlerRootView,
  RectButtonProps,
} from "react-native-gesture-handler";
import theme from "../../theme";
import { Container, Title } from "./styles";

interface IButton extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<IButton> = ({
  title,
  color,
  loading,
  enabled = true,
  ...rest
}) => {
  return (
    <GestureHandlerRootView>
      <Container
        color={color}
        {...rest}
        enabled={!loading && enabled}
        style={{ opacity: !loading && enabled ? 1 : 0.5 }}
      >
        {!loading ? (
          <Title>{title}</Title>
        ) : (
          <ActivityIndicator color={theme.colors.background_secondary} />
        )}
      </Container>
    </GestureHandlerRootView>
  );
};
export default Button;
