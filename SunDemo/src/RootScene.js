/**
 * Created by ritamashin on 2017/8/1.
 */
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomePage from './module/home-page/HomePage';
import MeView from './module/Me/Me'
import TabBarItem from './widget/TabBarItem'
import AllSubjectTableView from './module/all-subject/View'
import DreamSNSView from './module/dream-sns/DreamSNSView'
import BookDetailView from './module/book-detail/BookDetailView'
import SearchBookView from './module/search-book/SearchBookView'

class RootScene extends PureComponent {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        StatusBar.setBarStyle('dark-content');
      }

      render(){
          return (
              <Navigator/>
          );
      }
}

const Tab = TabNavigator(
    {
        HomePage : {
            screen : HomePage,
            navigationOptions : ({navigation}) =>({
               tabBarLabel : '首页',
                tabBarIcon : ({focus , tintColor })=>(
                    <TabBarItem
                        focus = {focus}
                        tintColor={tintColor}
                        normalImage = {require('./res/Tab-Res/tabBar_shucheng_nor.png')}
                        selectedImage = {require('./res/Tab-Res/tabBar_shucheng_sel.png')}
                    />
                )
            }),
        },

        DreamSNSView : {
            screen : DreamSNSView,
            navigationOptions : ({navigation}) => ({
                tabBarLabel : '圈子',
                tabBarIcon : ({focus , tintColor}) => (
                    <TabBarItem
                        focus = {focus}
                        tintColor={tintColor}
                        normalImage = {require('./res/Tab-Res/tabBar_faxian_nor.png')}
                        selectedImage = {require('./res/Tab-Res/tabBar_faxian_sel.png')}
                    />
                )
            }),
        },

        MeView : {
            screen : MeView,
            navigationOptions : ({navigation}) =>({
                tabBarLabel: '我',
                tabBarIcon : ({focus , tintColor}) => (
                    <TabBarItem
                        focus = {focus}
                        tintColor={tintColor}
                        normalImage = {require('./res/Tab-Res/tabBar_wo_nor.png')}
                        selectedImage = {require('./res/Tab-Res/tabBar_wo_sel.png')}
                    />
                )
            }),
        }
    },
    {
        tabBarComponent : TabBarBottom,
        tabBarPosition : 'bottom',
        swipeEnabled : false,
        lazy : true,
        tabBarOptions : {
            activeTintColor : '#06C1AE',
            inactiveTintColor : '#979797',
            style : {backgroundColor : '#ffffff'}
        }
    }
);

const Navigator = StackNavigator(
    {
        Tab : {screen : Tab},
        AllSubjectTableView : {screen : AllSubjectTableView},
        BookDetailView : {screen : BookDetailView},
        SearchBookView : {screen : SearchBookView},

    },
    {
        navigationOptions : ({navigation})=>({
           headerTintColor : '#333333',
            showIcon : true
        }),
    }
);

export default RootScene