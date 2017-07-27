/**
 * Created by mxr on 2017/7/26.
 */
import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import {StackNavigator }from 'react-navigation';
import {AppRegistry} from 'react-native';
import HomePageView from './module/HomePage';
import MeView from './module/Me'
import TabbarView from './lib/Tabbar'

export default function () {
    try {
        const SunDemo = StackNavigator({
            'TabbarView' : {
                screen : TabbarView,
                navigationOptions :{
                    header : null
                }
            }
        },
            {initialRouteName : 'TabbarView'});
         AppRegistry.registerComponent('SunDemo', () => SunDemo);
    }catch (error) {

    }

}
