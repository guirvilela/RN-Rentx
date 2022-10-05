import React from "react";
import { Container, HeaderContent, TotalCars } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

interface IHeader {
  totalCars: number;
  loading?: boolean;
}

const Header: React.FC<IHeader> = ({ totalCars, loading }) => {
  return (
    <Container>
      <HeaderContent>
        <Logo width={RFValue(108)} heigth={RFValue(12)} />

        {!loading && (
          <TotalCars>
            Total de {totalCars} {totalCars === 1 ? "Carro" : "Carros"}
          </TotalCars>
        )}
      </HeaderContent>
    </Container>
  );
};
export default Header;
