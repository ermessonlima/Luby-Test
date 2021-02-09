import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import '../../config/ReactotronConfig'
import api from '../../services/api'
import {useSelector, useDispatch} from 'react-redux';
import { Container, Logo, Form} from './styles';
import { useEffect } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';
import  { Keyboard } from 'react-native';

function HomeScreen ( {navigation}) {
const [newUser, setNewUser] = useState('')
const [textValidation, setTextValidation] = useState(false)
const [loading, setLoading] = useState(false)
const userLogin = useSelector(state=> state.userReducer.userLogin)
const dispatch = useDispatch();

useEffect(()=>{
    if(!newUser){
        setTextValidation(false)
    }else if (newUser){
        setTextValidation(false)
    }
},[newUser])

const loadData = async () => {
    setLoading(true)
    if(!newUser){
        setTextValidation(true)
        setLoading(false)
    }else if (newUser){
        setTextValidation(false)
    }
    Keyboard.dismiss()
    
    const response = await api.get(`/users/${newUser}`).catch(function (error) {
        setLoading(false)
  });
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

    navigation.navigate('Home');
}

     return (    
        <Background > 
            <Container>
                <Logo source={logo}/>
                <Form>       
                    <Input 
                        textInvalid = {textValidation}
                        placeholder ="Usuário"
                        returnKeyType="send"
                        onSubmitEditing={loadData}
                        value={newUser}
                        onChangeText={setNewUser}
                        autoCapitalize="none"
                    />              
                    <Button loading={loading} icon="arrow-forward" onPress= {()=>loadData()}>
                        ENTRAR
                    </Button>                  
                </Form>   
            </ Container>
        </Background>
    );
    
}

export default HomeScreen;
