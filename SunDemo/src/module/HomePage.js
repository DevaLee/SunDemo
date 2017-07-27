/**
 * Created by mxr on 2017/7/26.
 */
import React,{Component} from 'react';
import {
    View, Text,TouchableOpacity
} from 'react-native';
import px2px from '../Utils/px2dp'
import TestOnePage  from './TestOnePage'
import TestTwoPage  from './TestTwoPage'
import TestThreePage from './TestThreePage'
import theme from '../config/theme'
var CustomTabBar = require('../lib/CustomTabBar');
var ScrollableTabview = require('react-native-scrollable-tab-view');
export default class HomePageView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tabName :['第一','第二','第三']
        };
      }

      render(){
        return (
            <ScrollableTabview
                renderTabBar = {() => <CustomTabBar/>}
                tabBarBackgroundColor = 'rgb(22,131,251)'
                tabBarActiveTextColor="white"
                tabBarInactiveTextColor = "rgba(255,255,255,0.5)"
                tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                tabBarUnderlineStyle={theme.scrollView.underlineStyle}
            >
                    return (
                        <TestOnePage tabLabel = {item} key = {i} tabTag = {item}/>
                    );
                })}
            </ScrollableTabview>
        );

      };



}