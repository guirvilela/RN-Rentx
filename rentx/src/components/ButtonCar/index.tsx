import React from "react";
import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
  PanGestureHandler,
} from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const ButtonCar: React.FC<RectButtonProps> = ({ ...rest }) => {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withTiming(0);
      positionY.value = withTiming(0);
    },
  });

  return (
    <Animated.View
      style={[
        myCarsButtonStyle,
        {
          position: "absolute",
          bottom: 13,
          right: 22,
        },
      ]}
    >
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <ButtonAnimated
            {...rest}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </Animated.View>
  );
};
export default ButtonCar;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
});
