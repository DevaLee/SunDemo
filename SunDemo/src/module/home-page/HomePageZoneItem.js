/**
 * Created by ritamashin on 2017/8/3.
 */
import React,{PureComponent} from 'react';
import {TouchableOpacity , View, Text,Image} from 'react-native';
import px2dp from '../../Utils/px2dp'

class HomePageZoneItem extends PureComponent {

    render(){
        let zoneItem = this.props.zoneItem;
        return (
            <TouchableOpacity style={{marginRight : 8 ,borderColor : "#e0e0e0",borderWidth : px2dp(1)}}
                              onPress={() => this.props.onPressZoneItem(zoneItem)}
            >
                <Image style={{width : px2dp(375 * 0.8), height : px2dp(80) }}
                    source={{uri : zoneItem.itemIcon}}
                />
            </TouchableOpacity>
        )
    }
}
export  default HomePageZoneItem;