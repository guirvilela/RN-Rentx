import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Footer = styled.View`
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
