/**
 * Created by mxr on 2017/7/26.
 */
import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import {StackNavigator }from 'react-navigation';
import {AppRegistry} from 'react-native';
import HomePageView from './module/home-page/HomePage';
import MeView from './module/Me'
import TabbarView from './lib/Tabbar'
import AllSubjectTableView from './module/all-subject/View'
import News from './module/News'
import SubjectDetail from  './module/subject-detail/view'


export default function () {
    try {
        const SunDemo = StackNavigator({
            Home : {screen : TabbarView},
            News : {screen : News},
            AllSubjectTableView : {screen : AllSubjectTableView},
            SubjectDetail : {screen :SubjectDetail}
        },
            {
                navigationOptions: {
                    // headerStyle: { backgroundColor: color.theme }
                    headerTintColor: '#333333',
                    showIcon: true,
                },
            }

        );
         AppRegistry.registerComponent('SunDemo', () => SunDemo);
    }catch (error) {

    }

}
