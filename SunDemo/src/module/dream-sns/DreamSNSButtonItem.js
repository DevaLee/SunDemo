/**
 * Created by ritamashin on 2017/8/6.
 */
import React,{PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {computerTime ,px2dp,SNSTime} from '../../Utils'

export default class DreamSNSButtonItem extends PureComponent {
    static propTypes :{
        icon : React.PropTypes.source,
        title : React.PropTypes.string,
        iconStyle : React.PropTypes.style,
        titleStyle : React.PropTypes.style,
    }


    render (){
        let icon = this.props.icon && <Image source={this.props.icon}
                                             style={[styles.imageIcon , this.props.iconStyle]}/>
        let title = this.props.title && <Text style={[styles.title ,this.props.titleStyle]} >
                {this.props.title}</Text>

        return (

            <View style={styles.container}>
                <TouchableOpacity style={styles.container}>
                    {icon}
                </TouchableOpacity>
                {title}
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container :{
        flexDirection : 'row',

        justifyContent :'center',
        alignItems : 'center'
    },
    imageIcon :{
        width : px2dp(20),
        height : px2dp(20),
    },
    title :{
        color : '#777777',
        fontSize : 12,
    }

});