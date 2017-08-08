/**
 * Created by ritamashin on 2017/8/7.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList,Image
} from 'react-native';
import px2px from '../../Utils/px2dp'
import theme from '../../config/theme'
import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import DreamSNSHeaderView from './DreamSNSHeaderView'
import {color,NavigationItem} from '../../widget'


/**
 *  数据为空时的View
 */
export default class DreamSNSEmptyView extends PureComponent {

    render(){
        let numberArray = [];
        for(let i = 0; i < 8; i++){
            numberArray.push(i);
        }

        return (
            <View style={{flex : 1,paddingLeft : px2dp(10),paddingRight :px2dp(10)}}>
                {
                    numberArray.map((i) =>(
                        <View style={{flexDirection : 'row'}} key = {i}>
                            <Image source={require('../../res/book-sns/img_BookSNSloading_list.png')}
                                   style={{width : px2dp(350),height : px2dp(85)}}/>
                            <View style={{flex : 1}}/>
                        </View>
                    ))
                }
            </View>

        )
    }
}