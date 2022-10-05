import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import theme from "./src/theme";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container>
          <Routes />
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;
