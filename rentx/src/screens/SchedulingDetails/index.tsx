import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { useDispatch, useSelector } from "react-redux";
import Accessory from "../../components/Accessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { changeHeaderColor } from "../../store/modules/theme/action";

import { format } from "date-fns";
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  CarName,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import Button from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import theme from "../../theme";
import { ICarProps } from "../../store/modules/car/types";
import { CarProps } from "../../components/CardCar/type";
import { getAccessories } from "../../utils/accessories";
import { getPlatformDate } from "../../utils/getPlatformDate";
import api from "../../server/api";
import { Alert } from "react-native";

const SchedulingDetails: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const carDetails = useSelector<ICarProps, CarProps>(
    (state) => state.carDetails
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(changeHeaderColor("dark"));
    });

    return unsubscribe;
  }, [navigation]);

  const handleConfirmRental = async () => {
    setLoading(true);
    const scheduleByCar = await api.get(`/schedules_bycars/${carDetails.id}`);

    const equalData = scheduleByCar.data.unavailable_dates.filter((dates) =>
      carDetails.periods.includes(dates)
    );

    if (equalData.length === 0) {
      const unavailable_dates = [
        ...scheduleByCar.data.unavailable_dates,
        ...carDetails.periods,
      ];

      try {
        await api.post(`schedules_byuser`, {
          user_id: 1,
          car: carDetails,
        });

        await api.put(`/schedules_bycars/${carDetails.id}`, {
          id: carDetails.id,
          unavailable_dates,
        });
        setLoading(false);

        navigation.navigate("SchedulingComplete");
      } catch (error) {
        setLoading(false);
        Alert.alert("Agendamento", "Não foi possível confirmar o agendamento");
        console.log("Error => ", error);
      }
    } else {
      Alert.alert("Carro");
    }
  };

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={carDetails?.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{carDetails?.brand}</Brand>
            <CarName>{carDetails?.name}</CarName>
          </Description>

          <Rent>
            <Period>{carDetails?.rent?.period}</Period>
            <Price>R$ {carDetails?.rent?.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {carDetails?.accessories.map(({ type, name }) => (
            <Accessory key={type} name={name} icon={getAccessories(type)} />
          ))}
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{carDetails.dates[0]}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{carDetails.dates[1]}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {carDetails.rent.price} {carDetails.dates[2]}x diárias
            </RentalPriceQuota>
            <RentalPriceTotal>
              R$ {carDetails.rent.price * Number(carDetails.dates[2])}
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          loading={loading}
          onPress={handleConfirmRental}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
};
export default SchedulingDetails;
