/**
 * Created by mxr on 2017/7/26.
 */
import React ,{Component} from 'react';
import {
    View,Text,Image,StyleSheet,

} from 'react-native';
import {StackNavigator ,TabNavigator} from 'react-navigation'

import HomePageView from '../module/home-page/HomePage'
import MeView from '../module/Me'

import NewsView from '../module/News'
import AllSubjectTableView from '../module/all-subject/View'
export default class TabbarView extends Component{

// 构造
      constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              selectedTab: 'HomePage',
          };
      }

      render(){
        return (
            <TabNavigator/>
        );
      }
}
const MeNavigator = StackNavigator ({
    Home : {screen : MeView},
    AllSubjectTableView : {screen : AllSubjectTableView},
},{initialRouteName : 'Home'});
MeNavigator.navigationOptions = {
    title :'专题'
};


const  styles = StyleSheet.create({
   tab_image :{
       width : 20,
       height : 20
   }


});