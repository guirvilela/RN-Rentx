import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import Accessory from "../../components/Accessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { changeHeaderColor } from "../../store/modules/theme/action";

import Button from "../../components/Button";
import { getAccessories } from "../../utils/accessories";
import { ICarProps } from "../../store/modules/car/types";
import { CarProps } from "../../components/CardCar/type";
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  CarName,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import theme from "../../theme";

const CarDetails: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [210, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const slideCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  const carDetails = useSelector<ICarProps, CarProps>(
    (state) => state.carDetails
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(changeHeaderColor("dark"));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Animated.View style={slideCarsStyleAnimation}>
          <Header>
            <BackButton />
          </Header>

          <CarImages>
            <ImageSlider imagesUrl={carDetails?.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
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

        <Accessories>
          {carDetails?.accessories.map(({ type, name }) => (
            <Accessory key={type} name={name} icon={getAccessories(type)} />
          ))}
        </Accessories>

        <About>{carDetails?.about}</About>
        <About>{carDetails?.about}</About>
        <About>{carDetails?.about}</About>
        <About>{carDetails?.about}</About>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate("Scheduling")}
        />
      </Footer>
    </Container>
  );
};
export default CarDetails;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
});
