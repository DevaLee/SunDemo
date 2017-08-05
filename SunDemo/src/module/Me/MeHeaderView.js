/**
 * Created by ritamashin on 2017/8/5.
 */
import React,{PureComponent} from 'react';
import {View , Text,Image,TouchableOpacity ,StyleSheet} from 'react-native';
import {computerTime, px2dp, SNSTime} from '../../Utils'

export default class MeHeaderView extends PureComponent {


    render(){
        return (
        <View>
            <View style={{height : px2dp(8),backgroundColor : 'rgb(242,243,245)'}}/>
            <View style={styles.container}>
                <Image source={require('../../res/me/person_icon.png')}
                       style={{width : px2dp(65),height :px2dp(65)}}/>
                <View style={styles.personInfo_container}>
                    <Text>今天 </Text>
                    <View style={{flexDirection : 'row',paddingRight : px2dp(20)}}>
                        <Image source={require('../../res/me/icon_person_lv2.png')}
                               style={ styles.personInfo_LVImage}/>
                        <View style={styles.personInfo_rank}>
                            <Text style={{ color :'white',fontSize : 10,}}>排行榜</Text>
                        </View>

                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style={{color :'red' ,fontSize : 12,marginRight:px2dp(5)}}>
                            0
                            <Text style={{color : '#cccccc' , fontSize :12 ,marginRight :px2dp(10)}}>
                                 梦想钻
                            </Text>
                        </Text>
                        <Text style={{color :'red' ,fontSize : 12 , marginRight :px2dp(5)}}>
                            50589
                            <Text style={{color : '#cccccc' , fontSize :12 ,marginRight : px2dp(10)}}> 梦想币</Text>
                        </Text>
                    </View>
                </View>
                <View style={{width:px2dp(1),backgroundColor:'rgb(243,244,246)'}}/>

                <View style={styles.person_sign_in}>
                    <Text style={{color:'#bbbbbb',fontSize :12}}>连续签到</Text>
                    <Text style={{color: 'rgb(251,0,0)' ,fontSize : 17}}> 2 </Text>
                    <TouchableOpacity style={styles.person_sign_in_Btn}>
                        <Text style={{color:'white',fontSize : 13}}>签到</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        )
    }
}

const styles = StyleSheet.create({
    container :{
        flexDirection : "row",
        padding : px2dp(10),
        backgroundColor : 'white'
    },
    personInfo_container :{
        flex : 1,
        flexDirection: 'column',
        justifyContent : 'space-between',
    },
    personInfo_LVImage :{
        width : px2dp(24),
        height : px2dp(15),
        marginRight : px2dp(15)
    },
    personInfo_rank :{
        width : px2dp(40),
        backgroundColor : 'rgb(248,177,53)',
        borderRadius :5,
        justifyContent :'center',
        alignItems : 'center'
    },

    person_sign_in : {
        flexDirection :"column",
        justifyContent: 'space-between',
        marginLeft : px2dp(10),
        alignItems : 'center'
    },
    person_sign_in_Btn :{
      //{width :px2dp(42) ,height : px2dp(20),backgroundColor :'rgb(26,168,130)'}
        width : px2dp(42),
        height : px2dp(20),
        backgroundColor : 'rgb(26,168,130)',
        borderRadius: 5,
        justifyContent :'center',
        alignItems: 'center'
    }

});