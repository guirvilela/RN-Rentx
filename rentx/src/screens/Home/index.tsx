import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import api from "../../server/api";
import { useDispatch } from "react-redux";
import CardCar from "../../components/CardCar";
import { CarProps } from "../../components/CardCar/type";
import Header from "../../components/Header";
import { changeHeaderColor } from "../../store/modules/theme/action";
import Load from "../../components/Load";
import { changeCarData } from "../../store/modules/car/action";
import { Container, ContainerCars } from "./styles";
import ButtonCar from "../../components/ButtonCar";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  useEffect(() => {
    getAllCars();
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(changeHeaderColor("light"));
    });

    return unsubscribe;
  }, [navigation]);

  const getAllCars = async () => {
    setLoading(true);
    try {
      const response = await api.get("/cars");
      setCars(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  const handleSelectCar = (data: CarProps) => {
    dispatch(changeCarData(data));
    navigation.navigate("CarDetails");
  };

  const handleOpenMyCars = () => {
    navigation.navigate("MyCars");
  };

  return (
    <Container>
      <Header totalCars={cars.length} loading={loading} />

      {!loading ? (
        <ContainerCars
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCar onPress={() => handleSelectCar(item)} data={item} />
          )}
        />
      ) : (
        <Load />
      )}

      <ButtonCar onPress={handleOpenMyCars} />
    </Container>
  );
};
export default Home;
