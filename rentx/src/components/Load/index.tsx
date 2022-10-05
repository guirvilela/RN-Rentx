import React from "react";
import LottieView from "lottie-react-native";
import loadCar from "../../assets/load_animated.json";
import { Container } from "./styles";

const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};
export default Load;
