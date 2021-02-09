import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
 

  
`;


export const TextButton = styled.Text`
font-size: 20px;
color:#030202;
font-weight: bold;
`;

export const ImageAvatar = styled.Image`
height: 64px;
width: 64px;
border-radius: 32;
border-color: #ffffff;
border-width: 2px;
margin:20px;
`;

export const ImageButton = styled.Image`
width :20px;
height: 18px;
margin-left:5;
`;


export const Container = styled.KeyboardAvoidingView`
flex:1;
background: #292929;
padding-bottom:50px;
`;

export const TextInfor = styled.Text`
font-size: 26px;
color:#FFFFFF;
font-weight: bold;
margin-left: 5px;
`;


export const TextBio = styled.Text`
font-size: 26px;
color:#FFFFFF;
font-weight: bold;
margin-left: 5px;
`;


export const TextName = styled.Text`
font-size: 16px;
color:#FFFFFF;
font-weight: bold;
margin-left: 5px;
`;


export const Highlighter = styled.Image`
height: 42px;
width: 10px;
`;
export const Imageicon = styled.Image`
height: 19px;
width: 19px;
resize-mode: contain;
`;

export const ImageLock = styled.Image`
height: 19px;
width: 19px;
margin: 5px;
`;

export const FirstSection = styled.View`
margin-top 10px;
border-bottom-width: 1px;
border-color: #525252;
`;

export const TextCont = styled.Text`
font-size: 40px;
color:#FFFFFF;
font-weight: bold;
margin-bottom:-15px;
`;

export const TextTitle = styled.Text`
font-size: 15px;
color:#FFFFFF;
font-weight: bold;
`;

export const ContainerImage = styled.View`
justify-content: center;
align-items: flex-start;
flex:1;
`;

export const Header = styled.View`
background:#1F1F1F;
height: 68px;
justify-content: center;
`;

export const ContainerIcons = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
`;

export const ContainerTitle = styled.View`
justify-content: center;
align-items: flex-start;
flex:2;
`;

export const ContainerCenter = styled.View`
flex-direction: row;
padding:10px;
`;


export const SecondSection = styled.View`
border-color: #525252;
border-bottom-width: 2px;
margin-top: 15px;
`;

export const ContainerMark = styled.View`
flex-direction: row;
align-items: center;
`;

export const BoxFirst = styled.View`
flex-direction: row;
align-items: center;
flex:1;
`;

export const BoxSecond = styled.View`
flex:2;
align-items: flex-start;
justify-content: center;
`;


export const BoxThird = styled.View`
align-items: flex-end;
margin-right: 10px;
flex:1;


`;

export const BoxContainer = styled.View`
flex-direction: row;
align-items: center;
`;
