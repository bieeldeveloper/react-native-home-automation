import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont()

import { Container } from './styles'
import Header  from '~/components/Header'
import Tabs from '~/components/Tabs'
import Card from '~/components/Card'
export default function Main(){
  return (
    <Container>
      <Header />
      <Card />
      <Tabs />
    </Container>
  )
};
