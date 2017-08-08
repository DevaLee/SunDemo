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
import DreamSNSButtonItem from './DreamSNSButtonItem'
import DreamSNSTextView from './DreamSNSTextView'
import DreamSNSContentImageView from './DreamSNSContentImageView'
import DreamSNSBookView from './DreamSNSBookView'
import DreamSNSBottomView from './DreamSNSBottomView'
import DreamSNSTransmitTextView from './DreamSNSTransmitTextView'

export default class DreamSNSTransmitDynamicCell extends PureComponent{

    static propTypes :{
        transDynamicInfo : React.PropTypes.object,
    }

    render(){
        let dynamicInfo = this.props.transDynamicInfo

        return (
            <View style={styles.container}>
                {/*用户头像*/}
                <View>
                    <Image source={{uri : dynamicInfo.userLogo}}
                           defaultSource={require('../../res/book-sns/bookSNS_Image_default.png')}
                           style={styles.icon_image}/>
                </View>
                {/*动态信息*/}
                <View style={{flex : 1,marginLeft : px2dp(8)}}>
                    {/*动态标题*/}
                    <View >
                        <View style={styles.title_container}>
                            <Text style={styles.user_name}> {dynamicInfo.userName}</Text>
                            <Text style={styles.share_book}>转发</Text>
                            <View style={{flex : 1}}/>
                            <DreamSNSButtonItem icon={require('../../res/book-sns/btn_bookSNS_moreHandle.png')}
                                                iconStyle={{width:px2dp(24) ,height:px2dp(12)}}/>
                        </View>
                        {/*动态时间*/}
                        <View>
                            <Text style={styles.dynamicTime}> {SNSTime(dynamicInfo.updateTime)} </Text>
                        </View>
                    </View>
                    {/*转发的文字*/}
                    <DreamSNSTextView contentText={dynamicInfo.contentWord} textStyle={{marginTop : px2dp(8)}}/>
                    {/*源动态内容*/}
                    <View style={{backgroundColor :'rgb(249,249,249)',padding:px2dp(8)}}>
                        <DreamSNSTransmitTextView srcNameText={dynamicInfo.srcUserName} contentText={dynamicInfo.contentWord} textStyle={{marginTop : px2dp(8)}}/>
                        <DreamSNSContentImageView viewWidth={px2dp(293)} infoData={dynamicInfo} imageViewStyle={{marginTop : px2dp(8) ,marginBottom : px2dp(8)}}/>
                        <DreamSNSBookView bookInfo= {dynamicInfo} style={{backgroundColor :'rgb(254,254,254)'}}/>
                    </View>
                    {/*点赞，评论，转发*/}
                    <DreamSNSBottomView info={dynamicInfo} bottomViewStyle={{marginTop: px2dp(8)}}/>
                </View>
            </View>
        )
    }
}
/**
 *  默认属性
 * @type {{transDynamicInfo: {action: number, bookContentType: number, clientUuid: string, commentList: Array, commentNum: number, content: {cover: string, id: string, name: string}, contentBookId: string, contentBookLogo: string, contentBookName: string, contentBookStarlevel: number, contentPic: string, contentPicType: string, contentWord: string, createTime: number, delFlag: number, hasPraised: number, id: number, isSort: number, orderNum: number, praiseNum: number, publisher: number, recommend: number, retransmissionNum: number, retransmissionWord: string, srcId: number, srcStatus: number, srcUserId: number, srcUserName: string, subscribed: number, topicIds: string, updateTime: number, userId: number, userLogo: string, userName: string}}}
 */
DreamSNSTransmitDynamicCell.defaultProps ={
    transDynamicInfo :    {
            action : 2,
bookContentType : 1,
clientUuid : '1962102AB916EFFADF4EF180E6A91DBE01EA6D',
commentList :[],
commentNum : 0,
content : {
    cover : "http://books.mxrcorp.cn/D1FCD337776F4B1990B444999B24601B/UserPicture/bookIcon.png",
    id : 'D1FCD337776F4B1990B444999B24601B',
    name : '可视对讲空间访客',
},
contentBookId : 'D1FCD337776F4B1990B444999B24601B',
contentBookLogo : "http://books.mxrcorp.cn/D1FCD337776F4B1990B444999B24601B/UserPicture/bookIcon.png",
contentBookName : "2017暑假生活指导",
contentBookStarlevel : 9,
contentPic : "http://file.mxrcorp.cn/dream_multimedia_book/MxrCircle/2017-07-04/201707041447159685.jpg",
contentPicType : " ",
contentWord : "大家一起来吧都是废话撒即可获得手机客户离开家结婚的时间考虑和法律思考机会送快递发货及时等哈看",
createTime : 1501424937660,
delFlag : 0,
hasPraised : 0,
id : 39450,
isSort : 0,
orderNum : 3,
praiseNum : 3,
publisher : 2,
recommend : 0,
retransmissionNum : 0,
retransmissionWord : "你好，我是转发文字",
srcId : 28060,
srcStatus : 0,
srcUserId : 0,
srcUserName : "小王",
subscribed : 0,
topicIds : "180",
updateTime : 1501424937660,
userId : 196210,
userLogo : '',
userName : "小米锅巴",
}
}

const styles = StyleSheet.create({
    container :{
        padding :px2dp(10),
        // backgroundColor : 'red',
        flexDirection :'row',
    },
    icon_image :{
        width : px2dp(30),
        height : px2dp(30),
        borderRadius : px2dp(15)
    },
    title_container :{
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    user_name :{
        color : color.paragraphColor,
        fontSize : 14,
    },
    share_book :{
        color : color.timeColor,
        fontSize: 12,
        marginLeft: px2dp(8),

    },
    dynamicTime :{
        color :color.timeColor,
        fontSize :10,
        marginTop : px2dp(4)
    },
    transmit_content :{
        color : color.paragraphColor,
        fontSize : 14,
    }
})