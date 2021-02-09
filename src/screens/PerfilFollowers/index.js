import React, { useState} from 'react';
import { Platform,TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import save from '../../../assets/save.png';
import mark from '../../../assets/mark.png';
import arrowWhite from '../../../assets/arrowWhite.png';
import api from '../../services/api';
import { Highlighter,  TextDescription, Container, TextName,
    TextBio, TextSubtitle, FirstSection, TextCont,
    HighlighterContainer, ImageContainer, ContainerCont,
    Header, ContainerExit, TextTitle, ContainerTitle,
    ImageBottom, ContainerCenter, ContainerMark,
    ImageAvatar} from './styles';
import { useEffect } from 'react';

function HomeFollowers ({navigation}) {
        const [stars, setStars] = useState([])
        const dispatch = useDispatch();
 
useEffect(()=>{
        async function loadUsers(){
            const user = navigation.getParam('user');
            const response = await api.get(`/users/${user.login}`);
            setStars(response.data);
        }
        loadUsers();
},[])
    const handleSubimit = async () => {
        const response = await api.get(`/users/${stars.login}`);
        const data = {
            login: response.data.login,
            name: response.data.name,
            email:response.data.email,
            location:response.data.location,
            company:response.data.company,
            bio:response.data.bio,
            avatar:response.data.avatar_url,
            followers_url:response.data.followers_url,
            following_url:response.data.following_url,
            organizations_url:response.data.organizations_url,
            starred_url:response.data.starred_url,
            public_gists:response.data.public_gists,
            public_repos:response.data.public_repos,
            followers:response.data.followers,
            following:response.data.following,
        };
        dispatch({
            type: 'SET_USER',
            payload: {userLogin:data}
    })  
    navigation.navigate('Followers');     
    navigation.navigate('Home');
    };

     const  routeBack = () => {
        navigation.navigate('Followers');
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
                            <TouchableOpacity onPress={()=> routeBack()} >
                            <ImageBottom source={arrowWhite} />
                            </TouchableOpacity>
                        </ContainerTitle>
                        <ContainerExit>
                            <TouchableOpacity onPress={()=> handleSubimit()} >
                                    <TextTitle>Salvar</TextTitle>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> handleSubimit()} >
                                        <ImageBottom source={save} />
                            </TouchableOpacity>
                        </ContainerExit>
                    </FirstSection>
                  <ImageContainer>
                        <ImageAvatar source={{uri:stars.avatar_url}} />
                    </ImageContainer>
                    <ContainerMark>
                        <Highlighter source={mark} />
                        <TextName>{stars.name}</TextName>  
                    </ContainerMark>     
                        <TextDescription>{stars.email}</TextDescription>
                        <TextDescription>{stars.location}</TextDescription>                   
                    <ContainerCont>
                        <ContainerCenter>
                            <TextCont >{stars.followers}</TextCont>
                            <TextSubtitle >Seguidores</TextSubtitle>
                        </ContainerCenter>
                        <ContainerCenter>
                            <TextCont  >{stars.following}</TextCont>
                            <TextSubtitle >Seguindo</TextSubtitle>
                        </ContainerCenter>
                        <ContainerCenter>
                            <TextCont >{stars.public_repos}</TextCont>
                            <TextSubtitle >Repos</TextSubtitle>                         
                        </ContainerCenter>
                    </ContainerCont>
                    <HighlighterContainer >
                        <Highlighter source={mark} />
                        <TextBio>Bio</TextBio>                      
                    </HighlighterContainer>
                         <TextDescription>{stars.bio}</TextDescription>   
                    </Header>
            </Container>
        )
    }

export default HomeFollowers;