import React from "react";
import { Container, Image, Steps, StepNumber, Title, SubTitle } from "./styles";
import CarIcon from "../../assets/car.svg";

const OnBoard: React.FC = () => {
  return (
    <Container>
      <Steps>
        <Image source={CarIcon} />
        <StepNumber>02</StepNumber>
      </Steps>

      <Title>Primeiro,{`\n`}escolha a data </Title>
      <SubTitle>
        Você é quem define um período, e nós mostraremos os carros disponíveis.
      </SubTitle>
    </Container>
  );
};
export default OnBoard;
