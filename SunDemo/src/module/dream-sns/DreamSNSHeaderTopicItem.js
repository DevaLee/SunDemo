/**
 * Created by ritamashin on 2017/8/5.
 */
import React, {PureComponent} from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import px2dp  from '../../Utils/px2dp'
import {color ,StarLevelView} from '../../widget'
import NavigationItem from '../../widget/NavigationItem'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'

export default class DreamSNSHeaderTopicItem extends PureComponent {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render() {
          let topicItem = this.props.topicItem;
        return (
            <TouchableOpacity style={styles.container}>
                <Image source={{uri : topicItem.pic}}
                       style={styles.topic_image}/>
                <View style={styles.topic_shadow}>
                    <View style={{flex : 1,flexGrow : 1}}/>
                    <View>
                        <Text style={styles.topic_name}> {topicItem.name} </Text>
                    </View>
                    <View style={{flex: 1,flexGrow :1}}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container :{
        flexDirection : 'row',
        borderRadius : 5,
        width : px2dp(135),
        height : px2dp(65),
        marginLeft : px2dp(8),

    },
    topic_image :{
        width : px2dp(135),
        height : px2dp(65),
        borderRadius : 5,
    },
    topic_shadow :{
        position : 'absolute',
        top:0 ,left:0,right:0,bottom:0,
        backgroundColor :'rgba(0,0,0,0.3)',
        padding : px2dp(4),
        borderRadius : 5,
    },
    topic_name :{
        color: 'white',
        fontSize : 14,
        textAlign :'center',
    }
});