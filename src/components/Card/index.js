import React, {Component} from 'react'
import { Container,CardBox, CardHeader,CardContent, Title, Description ,ItemIluminacao,Item, Environment, Sanca, ItemSanca, CardContainer } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Slider} from 'react-native';
export default class Card extends Component  {
    change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
      }
    render(){
        return(
            <Container>
                <CardContainer>
                    <CardBox>
                        <CardHeader>
                            <Environment>Sala de Estar</Environment>
                        </CardHeader>
                        <CardContent>
                            <ItemIluminacao>
                                <Item>
                                    <Icon name="lightbulb-outline" size={30} color="#333" />
                                    <Description>Luz</Description>
                                </Item>
                                <Item>
                                    <Icon name="all-out" size={30} color="#333" />
                                    <Description>Spot</Description>
                                </Item>
                                <Item>
                                    <Icon name="gradient" size={30} color="#333" />
                                    <Description>Sanca</Description>
                                </Item>
                            </ItemIluminacao>
                            <Title>Sanca - Cores</Title>
                            <Sanca>
                                <ItemSanca itemColor="rgb(255,105,0)"/>
                                <ItemSanca itemColor="rgb(255,235,59)"/>
                                <ItemSanca itemColor="rgb(123,220,181)"/>
                                <ItemSanca itemColor="rgb(0,208,132)"/>
                                <ItemSanca itemColor="rgb(142,209,252)"/>
                                <ItemSanca itemColor="rgb(6,147,227)"/>
                            </Sanca>
                            <Sanca>
                                <ItemSanca itemColor="rgb(255,87,34)"/>
                                <ItemSanca itemColor="rgb(255,152,0)"/>
                                <ItemSanca itemColor="rgb(156,39,176)"/>
                                <ItemSanca itemColor="rgb(243,33,199)"/>
                                <ItemSanca itemColor="rgb(233,30,99)"/>
                                <ItemSanca itemColor="rgb(191,54,12)"/>
                            </Sanca>
                            <Slider step={1} value={50} maximumValue={250} onValueChange={this.change.bind(this)} />
                        </CardContent>
                    </CardBox>

                    <CardBox>
                        <CardHeader>
                            <Environment>Quarto</Environment>
                        </CardHeader>
                        <CardContent>
                            <ItemIluminacao>
                                <Item>
                                    <Icon name="lightbulb-outline" size={30} color="#333" />
                                    <Description>Luz</Description>
                                </Item>
                                <Item>
                                    <Icon name="all-out" size={30} color="#333" />
                                    <Description>Spot</Description>
                                </Item>
                                <Item>
                                    <Icon name="gradient" size={30} color="#333" />
                                    <Description>Cortina</Description>
                                </Item>
                            </ItemIluminacao>
                            <Title>Cortina - Cores</Title>
                            <Sanca>
                                <ItemSanca itemColor="rgb(255,105,0)"/>
                                <ItemSanca itemColor="rgb(255,235,59)"/>
                                <ItemSanca itemColor="rgb(123,220,181)"/>
                                <ItemSanca itemColor="rgb(0,208,132)"/>
                                <ItemSanca itemColor="rgb(142,209,252)"/>
                                <ItemSanca itemColor="rgb(6,147,227)"/>
                            </Sanca>
                            <Sanca>
                                <ItemSanca itemColor="rgb(255,87,34)"/>
                                <ItemSanca itemColor="rgb(255,152,0)"/>
                                <ItemSanca itemColor="rgb(156,39,176)"/>
                                <ItemSanca itemColor="rgb(243,33,199)"/>
                                <ItemSanca itemColor="rgb(233,30,99)"/>
                                <ItemSanca itemColor="rgb(191,54,12)"/>
                            </Sanca>
                            <Slider step={1} value={50} maximumValue={250} onValueChange={this.change.bind(this)} />
                        </CardContent>
                    </CardBox>
                </CardContainer>
            </Container>
        )
    }
}