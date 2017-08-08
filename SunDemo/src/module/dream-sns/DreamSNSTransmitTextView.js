/**
 * Created by ritamashin on 2017/8/6.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList,Image
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import NavigationItem from '../../widget/NavigationItem'

import {SNSTime,px2dp} from '../../Utils'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import {StarLevelView,color} from '../../widget'
export default class DreamSNSTransmitTextView extends PureComponent {

    static propTypes :{
        contentText : React.PropTypes.string,
        srcNameText : React.PropTypes.string,
        textStyle : React.PropTypes.style
    }

    render(){
        return (
            <View style={{flexDirection :'row'}}>
                <Text style={styles.srcNameText}>{this.props.srcNameText +':'}
                    <Text style={[styles.contentText,this.props.textStyle]}> {this.props.contentText}</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentText :{
        color: '#333333',
        fontSize :14
    },
    srcNameText :{
        color :color.srcNameColor,
        fontSize: 14
    }

});