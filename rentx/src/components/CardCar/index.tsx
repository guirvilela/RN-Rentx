import React from "react";

import { Image, TouchableOpacityProps } from "react-native";
import {
  About,
  Brand,
  Container,
  Details,
  ImageCar,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";

import GasolineIcon from "../../assets/gasoline.svg";
import EnergyIcon from "../../assets/energy.svg";
import { CarProps } from "./type";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getAccessories } from "../../utils/accessories";
import { SvgProps } from "react-native-svg";

interface Props extends TouchableOpacityProps {
  data: CarProps;
}

const CardCar: React.FC<Props> = ({
  data: { brand, name, rent, thumbnail, fuel_type },
  ...rest
}) => {
  const AcessoryCar: React.FC<SvgProps> = getAccessories(fuel_type);

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Details>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>

          <About>
            <Rent>
              <Period>{rent.period}</Period>
              <Price>R$ {rent.price}</Price>
            </Rent>

            <AcessoryCar />
          </About>
        </Details>

        <ImageCar resizeMode="contain" source={{ uri: thumbnail }} />
      </Container>
    </GestureHandlerRootView>
  );
};
export default CardCar;
