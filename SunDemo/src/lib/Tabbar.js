/**
 * Created by mxr on 2017/7/26.
 */
import React ,{Component} from 'react';
import {
    View,Text,Image,StyleSheet

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePageView from '../module/HomePage'
import MeView from '../module/Me'
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";

export default class TabbarView extends Component{
    static  navigationOptions :{
        header : null
    };
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
            <TabNavigator>
                <TabNavigatorItem
                    selected={this.state.selectedTab === 'HomePage'}
                    title='首页'
                    renderIcon ={()=> <Image source={require('../res/Tab-Res/tabBar_faxian_nor.png')} style={styles.tab_image}/>}
                    renderSelectedIcon = {() => <Image source={require('../res/Tab-Res/tabBar_faxian_sel.png')} style={styles.tab_image}/>}
                    onPress={() => this.setState({selectedTab:'HomePage'})}
                >
                    {<HomePageView/>}
                </TabNavigatorItem>

                <TabNavigatorItem
                    selected={this.state.selectedTab === 'MeView'}
                    title='首页'
                    renderIcon ={()=> <Image source={require('../res/Tab-Res/tabBar_wo_nor.png')} style={styles.tab_image}/>}
                    renderSelectedIcon = {() => <Image source={require('../res/Tab-Res/tabBar_wo_sel.png')} style={styles.tab_image}/>}
                    onPress={() => this.setState({selectedTab:'MeView'})}
                >
                    {<MeView navigator={this.props.navigator}/>}
                </TabNavigatorItem>
            </TabNavigator>


        );
      }
}

const  styles = StyleSheet.create({
   tab_image :{
       width : 20,
       height : 20
   }


});