/**
 * Created by mxr on 2017/7/26.
 */
'use strict'
import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../Utils/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../config/theme';

export default class  ImageButton extends Component{
    static propTypes = {
        text : PropTypes.string,
        image : PropTypes.number,
        icon : PropTypes.string,
        onPress : PropTypes.func,
        imageSize : PropTypes.number,
        fontSize : PropTypes.number,
        color : PropTypes.string,
        btnStyle : View.propTypes.style
    };

    static defaultProps = {
       imageSize : px2dp(40),
        fontSize : px2dp(23)
    };

    render(){
        const {image, icon , onPress} = this.props
        if (Platform.OS === 'ios'){
            if (image){
                return(
                    <TouchableOpacity onPress={onPress} activeOpacity={theme.activeOpacity}>
                        {this._renderContentWithImage()}
                    </TouchableOpacity>
                );
            }else if(icon){
                return (
                    <TouchableOpacity onPress={onPress}>
                        {this._renderContentWithIcon()}
                    </TouchableOpacity>
                );
            }
        }
    }

    /**
     *  渲染带图片的button
     * @private
     */
    _renderContentWithImage(){
        const {text ,icon, color,imageSize, fontStyle,btnStyle} = this.props;
        return(
            <View style={[styles.value ,btnStyle]}>
                <Icon name = {icon} size={imageSize} color={color}/>
                {text ? <Text style={{fontSize : fontSize, color : color}}>{text}</Text> : null}
            </View>
        );
    }

    _renderContentWithIcon(){
        const {text, icon, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Icon name={icon} size={imgSize} color={color}/>
                {text ?
                    <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                    :
                    null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view :{
        alignItems :'center',
        justifyContent : 'center'
    },

    text:{
        color : 'rgba(255,255,255,0.7)',
        marginTop : px2dp(4)
    }
});