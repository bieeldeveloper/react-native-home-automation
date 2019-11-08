import { Animated } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(Animated.View)`
    height: 400px;   
    flex-direction: row;
    justify-content:space-between;
`;

export const CardContainer = styled.ScrollView.attrs({
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: true,
    scrollIndicatorInsets: {top: 10, left: 30, bottom: 10, right: 30},    
})``;

export const CardBox = styled.View`
    background: #FFF;

`;

export const CardHeader = styled.View`
    flex-direction: row;
    padding: 10px 20px; 
    background: #eee;   
`;

export const Environment = styled.Text`
    font-size: 32px;
    color: #333;
`;


export const CardContent = styled.View`
    flex: 1;
    padding: 10px 10px;
`;

export const Description = styled.Text`
    font-size: 15px;
    color: #333;  
`;

export const ItemIluminacao = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`;

export const Item = styled.TouchableOpacity`
    border: #eee 4px;
    height: 100px;
    width: 100px;
    padding: 10px;
    justify-content: space-between;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    border-bottom-right-radius: 10px; 
    border-bottom-left-radius: 10px; 
`;
export const Title = styled.Text`
    font-size: 23px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
`;

export const Sanca = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`;

export const ItemSanca = styled.TouchableOpacity`
    width:53px;
    height: 53px;
    background: ${props => props.itemColor || "palevioletred"};
    border-top-left-radius: 4px; 
    border-top-right-radius: 4px; 
    border-bottom-right-radius: 4px; 
    border-bottom-left-radius: 4px; 
    margin: 0px 6px 6px 0px; 
`;

