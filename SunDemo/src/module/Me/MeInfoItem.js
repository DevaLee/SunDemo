/**
 * Created by ritamashin on 2017/8/5.
 */
import React,{PureComponent} from 'react';
import {View , Text,Image,TouchableOpacity ,StyleSheet} from 'react-native';
import {computerTime, px2dp, SNSTime} from '../../Utils'

export default class MeInfoItem extends PureComponent {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }


      render(){
           let itemInfo = this.props.itemInfo;
            //let itemInfo = { title: '我的梦想钻', subtitle: '去充值', image: require('../../res/me/icon_person_MXZ.png')};
          return (
                <TouchableOpacity style={{backgroundColor :'white'}}>
                    <View style={styles.container}>
                        <Image source={itemInfo.image} style={{width: px2dp(23) ,height :px2dp(25)}}/>
                        <Text style={styles.title}>{itemInfo.title}</Text>
                        <View style={{flex : 1}}/>
                        <Text style={styles.subTitle}>{itemInfo.subtitle}</Text>
                        <Image source={require('../../res/search-book/search_arrow_right.png')}
                               style={{width : px2dp(7),height : px2dp(14),marginLeft : px2dp(10)}}/>
                    </View>
                    <View style={{backgroundColor:'#cccccc',height :px2dp(0.5),marginLeft:px2dp(8) }}/>
                </TouchableOpacity>



          )
      }

}

const  styles = StyleSheet.create({
   container :{
       padding : px2dp(8),
       flexDirection : 'row',
       justifyContent :'center',
       alignItems : 'center',
       backgroundColor:'white'
   },
   title :{
       color: '#333333',
       fontSize : 14,
       marginLeft: px2dp(10)
   },
    subTitle :{
       color: '#777777',
        fontSize: 12,

    }
});