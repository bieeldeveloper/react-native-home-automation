import styled from 'styled-components/native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

export const Container = styled.View`
  align-items: center;
  padding: 0 0 30px;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Top = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    margin-left: 8px;
`;

export const Temperatura = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;