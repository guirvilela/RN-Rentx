import React from "react";
import { SvgProps } from "react-native-svg";
import { Container, Name } from "./styles";

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

const Accessory: React.FC<AccessoryProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
};
export default Accessory;
