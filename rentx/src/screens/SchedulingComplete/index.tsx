import React, { useEffect } from "react";
import { useWindowDimensions } from "react-native";

import BrandSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Title, Content, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeHeaderColor } from "../../store/modules/theme/action";

const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(changeHeaderColor("light"));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title> Carro Alugado! </Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel;
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={() => navigation.navigate("Home")} />
      </Footer>
    </Container>
  );
};
export default SchedulingComplete;
