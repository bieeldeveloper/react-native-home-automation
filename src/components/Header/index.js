import React from 'react'


import { Container, Top, Title,Temperatura } from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
Icon.loadFont()
export default function Header() {
    return (
        <Container>
            <Top>
                <Icon name="atom" color="#FFF" size={23} />
                <Title>My House</Title>
            </Top>
            <Temperatura>22 ºC</Temperatura>
        </Container>
    ); 
}