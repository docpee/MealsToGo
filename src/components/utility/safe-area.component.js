import { SafeAreaView, StatusBar } from "react-native";

import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* Se esiste StatusBar.currentHeight fai margin-top: ${StatusBar.currentHeight}px; altrimenti no (Short Circuit Expression)*/
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
