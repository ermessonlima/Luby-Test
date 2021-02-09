import React, { useState } from 'react';
import { useEffect } from 'react';
import arrowWhite from '../../../assets/arrowWhite.png';
import arrowWhiteD from '../../../assets/arrowWhiteD.png';
import mark from '../../../assets/mark.png';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { Highlighter,Container, TextName,FirstSection, ImageAvatar,
     Header,Imageicon,TextTitle,BoxThird, BoxFirst, BoxSecond,
     BoxContainer,ContainerCenter} from './styles';

function Following ( {navigation}) {
    const [following, setFollowing] = useState([])
    const userLogin = useSelector(state=> state.userReducer.userLogin)

    
    const seguir = (user) => {
        navigation.navigate('AuthFollowing', {user});
    }

useEffect(()=>{
    api.get(`/users/${userLogin.login}/following`)
    .then((response)=>{
    setFollowing(response.data)
    });        
},[userLogin])

const  routeFollowers= () => {
    navigation.navigate('Followers');
  }

        return (
            <Container>
                <Header>
                    <ContainerCenter>
                        <BoxFirst>
                        <TouchableOpacity onPress={()=> routeRepos()} >
                                    <Imageicon source={arrowWhite} />
                        </TouchableOpacity>
                        </BoxFirst>
                        <BoxSecond>
                            <TextTitle>Seguindo {userLogin.following} </TextTitle>
                        </BoxSecond>
                    </ContainerCenter>
                </Header>
                <FlatList 
                data={following}
                keyExtractor={follower => String(follower.id)}
                renderItem={({item})=>(
                    <>
                <FirstSection>
                            <BoxContainer>
                                <Highlighter source={mark} />
                                 <BoxFirst>
                                    <ImageAvatar source={{uri:item.avatar_url}} />
                                    <TextName>#{item.login} </TextName>
                                </BoxFirst>
                                <BoxThird>
                                    <TouchableOpacity onPress={()=>seguir(item)}>
                                        <Imageicon source={arrowWhiteD} />
                                    </TouchableOpacity>
                                </BoxThird>
                            </BoxContainer>
                    </FirstSection>             
                    </>
                )}
                />
          </Container>
        )
    }

export default Following;