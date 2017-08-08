/**
 * Created by ritamashin on 2017/8/6.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList
} from 'react-native';
import px2px from '../../Utils/px2dp'
import theme from '../../config/theme'
import NavigationItem from '../../widget/NavigationItem'

import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'

export default class DreamSNSTextView extends PureComponent {

    static propTypes :{
        contentText : React.PropTypes.string,
        textStyle : React.PropTypes.style
    }

    render(){
        return (
            <Text style={[styles.contentText,this.props.textStyle]}> {this.props.contentText}</Text>
        )
    }
}

const styles = StyleSheet.create({
    contentText :{
        color: '#333333',
        fontSize :14
    }
});