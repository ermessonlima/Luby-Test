import React from 'react'
import exit from '../../../assets/exit.png';
import mark from '../../../assets/mark.png';
import { useSelector } from 'react-redux';
import { Platform, TouchableOpacity } from 'react-native';
import {Highlighter, TextDescription, Container, TextName,
    TextBio, TextSubtitle, FirstSection, TextCont, HighlighterContainer,
    ImageContainer, ContainerCont, Header, ContainerExit, TextTitle,
    ContainerTitle, ImageBottom, ContainerCenter, ContainerMark, ImageAvatar
} from './styles';

    function Home ( {navigation}) {
    const userLogin = useSelector(state=> state.userReducer.userLogin)
    const routeToLogin = () => {
        navigation.navigate('HomeScreen');
    }

     return (
            <Container>             
              <Header style={{
                marginTop: Platform.OS == 'ios' ? 20 : 0,
                backgroundColor: "#1F1F1F",
                height: 115,
              }}>
                    <FirstSection>
                        <ContainerTitle>
                            <TextTitle>#{userLogin.login}</TextTitle>
                        </ContainerTitle>
                        <ContainerExit>
                            <TouchableOpacity onPress={()=>routeToLogin()} >
                                <TextTitle>Sair</TextTitle>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>routeToLogin()} >
                                <ImageBottom source={exit}  />
                            </TouchableOpacity>
                        </ContainerExit>
                    </FirstSection>
                    <ImageContainer>
                        <ImageAvatar source={{uri:userLogin.avatar}} />
                    </ImageContainer>
                    <ContainerMark>
                        <Highlighter source={mark} />
                        <TextName>{userLogin.name}</TextName>
                    </ContainerMark>
                        <TextDescription>{userLogin.email}</TextDescription>
                        <TextDescription>{userLogin.location}</TextDescription>
                    <ContainerCont>
                        <ContainerCenter>
                            <TextCont >{userLogin.followers}</TextCont>
                            <TextSubtitle >Seguidores</TextSubtitle>
                        </ContainerCenter>
                        <ContainerCenter>
                            <TextCont  >{userLogin.following}</TextCont>
                            <TextSubtitle >Seguindo</TextSubtitle>
                        </ContainerCenter>
                        <ContainerCenter>
                            <TextCont >{userLogin.public_repos}</TextCont>
                            <TextSubtitle >Repos</TextSubtitle>                         
                        </ContainerCenter>
                    </ContainerCont>
                    <HighlighterContainer >
                        <Highlighter source={mark} />
                        <TextBio>Bio</TextBio>                      
                    </HighlighterContainer>
                         <TextDescription>{userLogin.bio}</TextDescription>   
                    </Header>
            </Container>
        )
    }

export default Home;