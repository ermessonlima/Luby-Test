import React, { useEffect, useState } from 'react';
import arrowWhite from '../../../assets/arrowWhite.png';
import lock from '../../../assets/lock.png';
import open from '../../../assets/open.png';
import mark from '../../../assets/mark.png';
import star from '../../../assets/star.png';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';
import { Platform, TouchableOpacity } from 'react-native';
import {
    Highlighter, TextDescription,Container, TextName,
    TextCity, FirstSection,  ImageLock,HighlighterContainer,
    Containerlock, Header, Imageicon, TextTitle,
    ContainerTitle,Box, ContainerIcons, SecondSection,
    ContainerImage
 } from './styles';

    function Repos ({navigation}) {
     const [repos, setRepos] = useState([])
     const userLogin = useSelector(state=> state.userReducer.userLogin)
    
    useEffect(()=>{
        api.get(`/users/${userLogin.login}/repos`)
        .then((response)=>{
        setRepos(response.data)
        });        
    },[userLogin])
    const  routeHome= () => {
        navigation.navigate('Home');
      }
        return (
            <Container>
                <Header style={{ marginTop: Platform.OS == 'ios' ? 20 : 0}}>
                    <FirstSection>
                        <ContainerImage>                          
                        <TouchableOpacity onPress={()=> routeHome()} >
                                    <Imageicon source={arrowWhite} />
                            </TouchableOpacity>
                        </ContainerImage>
                        <ContainerTitle>
                                <TextTitle>{userLogin.public_repos} repositórios </TextTitle>
                        </ContainerTitle>
                    </FirstSection>
                </Header>

                <FlatList 
                data={repos}
                keyExtractor={repo => String(repo.id)}
                renderItem={({item})=>(
                    <SecondSection>
                    <HighlighterContainer>
                        <Highlighter source={mark}  />
                        <TextName>{item.name}</TextName>
                    </HighlighterContainer>

                    <TextDescription>{item.description}</TextDescription>

                    <ContainerIcons>
                        <Box>
                            <Imageicon source={star} />
                            <TextCity>{item.stargazers_count}</TextCity>
                        </Box>
                        <Containerlock>
                            <Box>
                                <ImageLock source={open}  />
                                <ImageLock source={lock}  />
                            </Box>
                        </Containerlock>
                    </ContainerIcons>
                 
                    </SecondSection>
                )}
                
                />
              
            </Container>
        )
    }


export default Repos;