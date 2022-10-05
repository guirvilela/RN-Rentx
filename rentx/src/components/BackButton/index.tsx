import React from "react";
import { Container } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  BorderlessButtonProps,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ color, ...rest }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView>
      <Container onPress={() => navigation.goBack()} {...rest}>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={color ? color : theme.colors.text}
        />
      </Container>
    </GestureHandlerRootView>
  );
};
export default BackButton;
