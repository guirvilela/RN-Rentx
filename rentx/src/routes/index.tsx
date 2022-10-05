import React from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { ITheme } from "../store/modules/theme/types";

const Routes: React.FC = () => {
  const theme = useSelector<ITheme>((state) => state.headerColor);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme === "light" ? "light-content" : "dark-content"}
        animated
        translucent
        backgroundColor="transparent"
      />
      <StackRoutes />
    </NavigationContainer>
  );
};
export default Routes;
