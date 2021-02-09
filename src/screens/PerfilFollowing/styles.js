import styled from 'styled-components/native';


export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
background: #292929;
`;

export const TextBio = styled.Text`
font-size: 26px;
color:#FFFFFF;
font-weight: bold;
margin-left: 5px;
`;

export const TextDescription = styled.Text`
font-size: 18px;
color:#FFFFFF;
margin-left: 15px;
`;

export const TextName = styled.Text`
font-size: 26px;
color:#FFFFFF;
font-weight: bold;
margin-left: 5px;
`;

export const ImageAvatar = styled.Image`
height: 115px;
width: 115px;
border-radius: 57.5px;
border-color: #ffffff;
border-width: 2px;
margin-top:20px;
`;

export const Highlighter = styled.Image`
height: 42px;
width: 10px;
`;
export const ImageBottom = styled.Image`
height: 19px;
width: 19px;
resize-mode: contain;
`;

export const TextSubtitle = styled.Text`
font-size: 17px;
color:#FFFFFF;
padding: 10px;
`;

export const FirstSection = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
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
margin-right:10px;
`;

export const HighlighterContainer = styled.View`
flex-direction: row;
align-items: flex-start;
`;

export const ImageContainer = styled.View`
align-items: center;
`;

export const ContainerCont = styled.View`
flex-direction: row;
background: #5252525D;
justify-content: space-between;
align-items: center;
margin-top:25px;
margin-bottom:25px;
height: 97px;
`;

export const Header = styled.View`
background:#1F1F1F;
height: 115px;
`;

export const ContainerExit = styled.View`
flex-direction: row;
text-align:center;
align-items: center;
`;

export const ContainerTitle = styled.View`
flex-direction: row;
align-items: center;
`;

export const ContainerCenter = styled.View`
align-items: center;
`;

export const ContainerMark = styled.View`
flex-direction: row;
align-items: center;
`;

