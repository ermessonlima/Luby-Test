import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Image, Dimensions } from 'react-native';
import HomeScreen from '../src/screens/Login/index';
import Home from './screens/Home';
import Repos from './screens/Repos';
import Followers from './screens/Followers';
import Following from './screens/Following';
import PerfilFollowing from './screens/PerfilFollowing';
import PerfilFollowers from './screens/PerfilFollowers';


const DEVICE_WIDTH = Dimensions.get('window').width;
const loginOrProfileFollowers = createSwitchNavigator({
  Followers:Followers,
  AuthFollowers: PerfilFollowers,
},{
  initialRouteName : 'Followers'
})

const loginOrProfileFollowing = createSwitchNavigator({
  Following:Following,
  AuthFollowing: PerfilFollowing,
},{
  initialRouteName : 'Following'
})

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      HomeScreen,
            loginOrProfileFollowers,
            loginOrProfileFollowing,
      TabNavigator: createBottomTabNavigator({
              Home,
              Repos,
              loginOrProfileFollowers,
              loginOrProfileFollowing,
      },
      {
        tabBarOptions:{
              showLabel: true,
              activeTintColor:'#000000',
          style:{
              borderTopLeftRadius:21, 
              borderTopRightRadius:21,
              backgroundColor:"#ffffff",
              position:'absolute',
              bottom: 0,
              padding:10,
              width: DEVICE_WIDTH,
              height: 54,
              zIndex: 8 
         }
        }
      })
    },
  ),
)

export default Routes;

// Definindo os ícones das Tabs
Home.navigationOptions={
  title: 'Home',
  tabBarIcon:({ tintColor }) =>(
    <Image   
    source = {require('../assets/home.png')}
    style={[{marginTop: 14, width: 28, height: 28, marginBottom:10}, {tintColor: tintColor}]} />
  )
};
Repos.navigationOptions={
  title: 'Repos',
  tabBarIcon:({ tintColor }) =>(
    <Image   
    source = {require('../assets/logoGit.png')}
    style={[{marginTop: 14, width: 28, height: 28, marginBottom:10}, {tintColor: tintColor}]} />
  )
};
loginOrProfileFollowers.navigationOptions={
  title: 'Followers',
  tabBarIcon:({ tintColor }) =>(
    <Image   
    source = {require('../assets/follower.png')}
    style={[{marginTop: 14, width: 28, height: 28, marginBottom:10}, {tintColor: tintColor}]} />
  )
};
loginOrProfileFollowing.navigationOptions={
  title: 'Following',
  tabBarIcon:({ tintColor }) =>(
    <Image   
    source = {require('../assets/follower.png')}
    style={[{marginTop: 14, width: 28, height: 28, marginBottom:10}, {tintColor: tintColor}]} />

  )
};
