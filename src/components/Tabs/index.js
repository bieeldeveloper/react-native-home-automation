import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabItem, TabText } from './styles'
import {AsyncStorage} from 'react-native';

export default class Tabs extends Component {   
    constructor(props){
        super(props)
        this.varanda = '0'
        this.state = {
            varandaBluetooth: '0',
            varandaSpot:'0',
            salaLuz:'0',
            salaSpot:'0',
            cozinhaLuz:'0'
          };
        AsyncStorage.getItem('varandaBluetooth').then((value) => {
           this.setState({varandaBluetooth: value})
        })
        AsyncStorage.getItem('varandaSpot').then((value) => {
            this.setState({varandaSpot: value})
        })
        AsyncStorage.getItem('salaLuz').then((value) => {
            this.setState({salaLuz: value})
        })
        AsyncStorage.getItem('salaSpot').then((value) => {
            this.setState({salaSpot: value})
        })
        AsyncStorage.getItem('cozinhaLuz').then((value) => {
            this.setState({cozinhaLuz: value})
        })
    }

    _onPressButton = async(topic) =>{
        const value = await AsyncStorage.getItem(topic);
        let message = '0';
        if(value == 0){
            message = '1'
        }else {
            message = '0'
        }
        const status = `{"${topic}":"${message}"}`
        this.setState(JSON.parse(status))
        await AsyncStorage.setItem(topic, message);
        fetch('http://192.168.100.22:3000/'+topic+'/'+ message)
    }
    render(){ 
        return (
            <Container>
                <TabsContainer>
                   <TabItem> 
                        <Icon name="bluetooth-audio" size={24} color="#fff" />
                        { this.state.varandaBluetooth == '0' ?
                            <TabText>Bluetooth Varanda OFF </TabText>
                            :
                            <TabText>Bluetooth Varanda ON </TabText>
                        }
                    </TabItem>                                      
                    <TabItem>
                        <Icon name="all-out" size={24} color="#fff" />
                        { this.state.varandaSpot == '0' ?
                            <TabText>Varanda Spot OFF</TabText>
                            :
                            <TabText>Varanda Spot ON</TabText>
                        }
                    </TabItem>
                    <TabItem >
                        <Icon name="lightbulb-outline" size={24} color="#fff" />
                        { this.state.salaLuz == '0' ?
                            <TabText>Sala Luz OFF</TabText>
                            :
                            <TabText>Sala Luz ON</TabText>
                        }
                    </TabItem>
                    <TabItem>
                        <Icon name="all-out" size={24} color="#fff" />
                        { this.state.salaSpot == '0' ?
                            <TabText>Sala Spot OFF</TabText>
                            :
                            <TabText>Sala Spot ON</TabText>
                        }
                    </TabItem>
                    <TabItem>
                        <Icon name="lightbulb-outline" size={24} color="#fff" />
                        { this.state.cozinhaLuz == '0' ?
                            <TabText>Cozinha Luz OFF</TabText>
                            :
                            <TabText>Cozinha Luz ON</TabText>
                        }
                    </TabItem>
                </TabsContainer>
            </Container>
        ); 
    }
}


