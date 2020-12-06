import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 220px;
  height: 50px;
  background: #823DF5;
  border-radius: 15px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-weight: bold;
  color: #fcfcfc;
  font-size: 18px;
`;