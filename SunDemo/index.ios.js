/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import { AppRegistry ,View,Image} from 'react-native'

import RootScene from './src/RootScene';
import BookDetailView from './src/module/book-detail/BookDetailView'

export default class SunDemo extends PureComponent {
    render () {

        return (
            <RootScene/>
            //<BookSNSCell total = {5} stars = 3/>
        )
    }
}
AppRegistry.registerComponent('SunDemo', () => SunDemo);

// import React from 'react';
// import {AppRegistry, Text,View,TouchableOpacit,Button}from 'react-native';
//
// import MeView from "./src/module/Me";
// import {StackNavigator} from 'react-navigation'
// import { TabNavigator } from 'react-navigation'
// import {NavigationActions} from 'react-navigation'
//
//
// class ChatScreen extends React.Component{
//     // 以 箭头函数的形式返回 setParam方法来改变 导航栏的状态
//     static navigationOptions = ({navigation})=>{
//         const {state ,setParams} = navigation;
//         const isInfo = state.params.mode === 'Info';
//         const {user} = state.params;
//         return {
//           title : isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
//             headerRight :(
//                 <Button   title= {isInfo ? 'Done' : `${user}'s Info`} onPress={()=>setParams({mode : isInfo ? 'none' : 'Info'})}/>
//             ),
//         };
//     };
//     // 直接 以键值对的形式返回
//     // static navigationOptions = ({navigation})=>({
//     //     title : "AAAAAAA",
//     // });
//
//     render() {
//         const { state ,goBack } = this.props.navigation;
//         return <Button onPress={()=>this.props.navigation.dispatch(backAction)} title={'Go Profile'}/>;
//     }
// }
// const backAction = NavigationActions.back({
//     key: 'Home'
// });
//
// class ProfileScreen extends React.Component {
//     static navigationOptions = ({navigation, screenProps})=>({
//         title : navigation.state.params.name + "'s Profile ",
//         headerRight:<Button color={screenProps.tintColor} onPress={()=>{}} title={'nihao'} />
//     });
//
//     render(){
//         return (
//             <Text> dddddd </Text>
//         );
//     }
//
//
// }
// const resetAction = NavigationActions.reset({
//     index : 1,
//     action : [
//         NavigationActions.navigate({routeName :'ProfileScreen'}),
//         NavigationActions.navigate({routeName : 'ChatScreen'})
//     ]
// });
//
// class RecentChatScreen extends React.Component{
//
//     render(){
//         return (
//             <Button onPress={()=> this.props.navigation.navigate('Chat',{user : 'Li neng'})}
//             title={ 'chat with Li neng'}/>
//
//         );
//     }
// }
// class AllContactsScreen extends React.Component {
//
//     render() {
//         return <Button onPress={()=> this.props.navigation.navigate('Chat',{user : 'lucy'})}
//             title='chat with lucy'
//         />
//     }
// }
//
// const MainScreenNavigator = TabNavigator ({
//     Recent : {screen : RecentChatScreen},
//     All : {screen: AllContactsScreen}
// });
//
// MainScreenNavigator.navigationOptions ={
//    title: 'My Chats',
// };
//
// const SunDemo = StackNavigator({
//     Home: { screen: MainScreenNavigator },
//     Chat: { screen: ChatScreen },
//     Profile : {screen : ProfileScreen}
// });
//
//
// AppRegistry.registerComponent('SunDemo', () => SunDemo);