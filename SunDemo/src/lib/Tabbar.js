/**
 * Created by mxr on 2017/7/26.
 */
import React ,{Component} from 'react';
import {
    View,Text,Image,StyleSheet,

} from 'react-native';
import {StackNavigator} from 'react-navigation'
import TabNavigator from 'react-native-tab-navigator';
import HomePageView from '../module/HomePage'
import MeView from '../module/Me'
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import NewsView from '../module/News'
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
            <TabNavigator>
                <TabNavigatorItem
                    selected={this.state.selectedTab === 'HomePage'}
                    title='首页'
                    renderIcon ={()=> <Image source={require('../res/Tab-Res/tabBar_faxian_nor.png')} style={styles.tab_image}/>}
                    renderSelectedIcon = {() => <Image source={require('../res/Tab-Res/tabBar_faxian_sel.png')} style={styles.tab_image}/>}
                    onPress={() => this.setState({selectedTab:'HomePage'})}
                    titleStyle={{color : '#ddd'}}
                    selectedTitleStyle={{color : 'rgb(22,167,119)'}}
                >
                    {<HomePageView navigation = {[this.props.navigation]}/>}
                </TabNavigatorItem>

                <TabNavigatorItem
                    selected={this.state.selectedTab === 'MeView'}
                    title='我'
                    renderIcon ={()=> <Image source={require('../res/Tab-Res/tabBar_wo_nor.png')} style={styles.tab_image}/>}
                    renderSelectedIcon = {() => <Image source={require('../res/Tab-Res/tabBar_wo_sel.png')} style={styles.tab_image}/>}
                    onPress={() => this.setState({selectedTab:'MeView'})}
                    titleStyle={{color : '#aaa'}}
                    selectedTitleStyle={{color : 'rgb(22,167,119)'}}
                >
                    {<MeView navigation= {this.props.navigation}/>}
                </TabNavigatorItem>
            </TabNavigator>


        );
      }
}
const MeNavigator = StackNavigator ({
    Home : {screen : MeView},
    News : {screen : NewsView},
});
MeNavigator.navigationOptions = {
    title :'专题'
};


const  styles = StyleSheet.create({
   tab_image :{
       width : 20,
       height : 20
   }


});