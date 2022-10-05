import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import CardCar from "../../components/CardCar";
import { CarProps } from "../../components/CardCar/type";
import HeaderScheduling from "../../components/HeaderScheduling";
import api from "../../server/api";

import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";
import {
  Container,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";
import Load from "../../components/Load";

interface MyCarProps {
  id: string;
  user_id: string;
  car: CarProps;
}

const MyCars: React.FC = () => {
  const [cars, setCars] = useState<MyCarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCarsRented();
  }, []);

  const getCarsRented = async () => {
    setLoading(true);

    try {
      const response = await api.get("/schedules_byuser?user_id=1");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <HeaderScheduling title={"Seus agendamentos\nestão aqui."} />

      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <CardCar data={item.car} />

                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.car.dates[0]}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.car.dates[1]}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};
export default MyCars;
