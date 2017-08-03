/**
 * Created by ritamashin on 2017/8/1.
 */
import React,{PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

class NavigationItem extends PureComponent {

    render (){
        let icon = this.props.icon &&
            <Image source={this.props.icon}
                                             style={[styles.icon ,this.props.iconStyle]} />
        let title = this.props.title &&
            <Text style={[styles.text ,this.props.textStyle]} >{this.props.title}</Text>

        return (
            <TouchableOpacity style={[styles.container,this.props.containerStyle]} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 27,
        height: 27,
        margin: 8,
    },
    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8,
    }
});

export default NavigationItem;