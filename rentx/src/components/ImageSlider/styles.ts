import styled from "styled-components/native";

import { Dimensions } from "react-native";

interface ImageIndexProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.TouchableOpacity<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  border-radius: 3px;
  margin-left: 8px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
