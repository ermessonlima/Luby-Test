import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import Header from './screens/Header';

import Repos from './screens/Repos';
import Seguidores from './screens/Seguidores';

const MenuRoutes = createAppContainer(
    createBottomTabNavigator({
    Header:{
        name: 'Header',
        screen: Header,
        navigationOptions:{
            title: 'Feed',
            tabBarIcon:({tintColor}) =>
            <Icon name= 'home' size={10} color={tintColor}/>
        }

    },
    Repos:{
        name: 'Repos',
        screen: Header,
        navigationOptions:{
            title: 'Repos',
            tabBarIcon:({tintColor}) =>
            <Icon name= 'camera' size={30} color ={tintColor}/>
        }

    },
    Seguidores:{
        name: 'Seguidores',
        screen: Header,
        navigationOptions:{
            title: 'Seguidores',
            tabBarIcon:({tintColor}) =>
            <Icon name= 'user' size={30} color ={tintColor}/>
        }

    },


}))

const MenuConfig = {
    initialRouteName: 'Header',
    tabBarOptions:{
        showLabel: false,
    }
}
const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator