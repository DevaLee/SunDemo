/**
 * Created by ritamashin on 2017/8/6.
 */
'use strict'
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList,Image
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import NavigationItem from '../../widget/NavigationItem'

import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import {StarLevelView} from '../../widget'

export default class DreamSNSContentImageView extends PureComponent {
    static propTypes : {
        viewWidth : React.PropTypes.number,
        infoData : React.PropTypes.object,
        imageViewStyle : React.PropTypes.style
    }


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            width : 0,
            height : 0,
            imageArray :[]
        };
      }

    /**
     *  渲染每一个 item
     * @param imageUrl
     * @param row
     * @returns {XML}
     */
    renderItem = (imageUrl , row) => {
        if (imageUrl.item.length !== 2){
            console.log(imageUrl.item);

            return (
                <View style={{flexDirection :'row',justifyContent : 'space-between'}}>
                    {imageUrl.item.map((image , column) =>(
                        <TouchableOpacity key={column}
                                          onPress={() => this.props.onPress && this.props.onPress(row,column)}
                                          activeOpacity={1}>
                            <Image source={{uri : image}}
                                   style={[{width :this.state.width ,height :this.state.height}]}
                                   defaultSource={require('../../res/book-sns/bookSNS_Image_default.png')}/>
                        </TouchableOpacity>
                    ))}
                </View>
            )
        }else {
            return (
                <View style={{flexDirection :'row',justifyContent : 'flex-start'}}>
                    {imageUrl.item.map((image , column) =>(
                        <TouchableOpacity key={column}
                                          onPress={() => this.props.onPress && this.props.onPress(row,column)}
                                          activeOpacity={1}>
                            <Image source={{uri : image}}
                                   style={[{width :this.state.width ,height :this.state.height ,marginRight:px2dp(7)}]}
                                   defaultSource={require('../../res/book-sns/bookSNS_Image_default.png')}/>
                        </TouchableOpacity>
                    ))}

                </View>
            )
        }
    }
    /**
     *  为每一个item生成一个key
     * @param item
     * @param index
     * @returns {*}
     */
    keyExtractor = (item,index) => {
        return index;
    }
    /**
     * 渲染分割线
     */
    itemSeparatorComponent = () =>(
        <View style={{flex : 1,height :(this.props.viewWidth - this.state.width * 3) / 2.0 }}/>
    );

    componentDidMount() {
        // 设定图片的大小宽度
        let imageInfo = this.props.infoData;
        let contentPic = imageInfo.contentPic;
        if(contentPic){
            let array = contentPic.split(',');
            let width = 0;
            let height = 0;
            //只有一张图片
            if (array.length === 1){
                if (imageInfo.contentPicType === 'V'){
                    width = px2dp(191);
                    height = px2dp(227);
                }else if(imageInfo.contentPicType === 'H') {
                    width = px2dp(315);
                    height = px2dp(220);
                }else {
                    width = px2dp(191);
                    height = px2dp(191);
                }
                //多张图片
            }else {
                width = (this.props.viewWidth - px2dp(7)) / 3;
                height = (this.props.viewWidth - px2dp(7)) / 3;
            }

            let dataSourceArray = [];
            for (let i = 0; i < array.length / 3 ; i++){
                let subArray = [];
                for (let j = 0; j < 3; j++){
                    if ((i * 3 + j) <array.length ){
                        let image = array[i * 3 + j];
                        if (image.length === 0){
                            image = "login"
                        }
                        subArray.push(image);
                    }
                }
                dataSourceArray.push(subArray);
            }
            this.setState({
                width :width,
                height :height,
                imageArray: dataSourceArray,
            })
        }
    }


        render(){
            return (
                <FlatList renderItem = {this.renderItem}
                          numColumns = {1}
                          keyExtractor = {this.keyExtractor}
                          ItemSeparatorComponent = {this.itemSeparatorComponent}
                          data = {this.state.imageArray}
                          scrollEnabled={false}
                          style={this.props.imageViewStyle}
                />
            )
        }
}


const  styles = StyleSheet.create({
    container : {
       flexDirection :'row',
       flexWrap : 'wrap',
       justifyContent : 'space-between',
    },
    noramlImageLayoyt :{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    otherImageLayout :{
        flexDirection : 'row'
    }


});