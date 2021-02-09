import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
 

  
`;


export const Container = styled.KeyboardAvoidingView`
flex:1;
background: #292929;
padding-bottom:50px;
`;

export const TextDescription = styled.Text`
font-size: 15px;
color:#FFFFFF;
margin-left: 15px;
`;

export const TextName = styled.Text`
font-size: 20px;
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
flex-direction: row;
padding: 10px;
`;

export const TextTitle = styled.Text`
font-size: 15px;
color:#FFFFFF;
font-weight: bold;
`;

export const TextCity = styled.Text`
font-size: 15px;
color:#FFFFFF;
margin-left:2px;
`;

export const HighlighterContainer = styled.View`
flex-direction: row;
align-items: center;
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

export const SecondSection = styled.View`
border-color: #525252;
border-bottom-width: 1px;
margin-top: 15px;
`;

export const Box = styled.View`
flex-direction: row;
align-items: center;
text-align: center;
`;

export const Containerlock = styled.View`

`;
