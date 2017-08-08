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

export default class DreamSNSDefaultDynamicCell extends PureComponent {

        static propTypes :{
            dynamicInfo : React.PropTypes.object,
        }

        _renderDynamicImagView (dynamicInfo){
            return <DreamSNSContentImageView viewWidth={px2dp(315)} infoData={dynamicInfo}
                                             imageViewStyle={{marginTop : px2dp(8) ,marginBottom : px2dp(8)}}/>
        }


        render(){
            let dynamicInfo = this.props.dynamicInfo

            return (
                <View style={styles.container}>
                    {/*头像*/}
                    <View>
                        <Image source={{uri : dynamicInfo.userLogo}}
                               defaultSource={require('../../res/book-sns/bookSNS_Image_default.png')}
                               style={styles.icon_image}/>
                    </View>
                    {/*动态*/}
                    <View style={{flex : 1,marginLeft : px2dp(8)}}>
                        {/*动态的基本信息*/}
                        <View >
                            <View style={styles.title_container}>
                                <Text style={styles.user_name}> {dynamicInfo.userName}</Text>
                                <Text style={styles.share_book}> 分享图书 </Text>
                                <View style={{flex : 1}}/>
                                <DreamSNSButtonItem icon={require('../../res/book-sns/btn_bookSNS_moreHandle.png')}
                                                    iconStyle={{width:px2dp(24) ,height:px2dp(12)}}/>
                            </View>
                            {/*动态时间*/}
                            <View>
                                <Text style={styles.dynamicTime}> {SNSTime(dynamicInfo.updateTime)} </Text>
                            </View>
                        </View>
                        {/*动态的详细信息*/}
                        <View>
                            {/*动态内容*/}
                            <DreamSNSTextView contentText={dynamicInfo.contentWord} textStyle={{marginTop : px2dp(8)}}/>
                            {/*动态图片*/}
                            <DreamSNSContentImageView viewWidth={px2dp(315)} infoData={dynamicInfo}
                                                      imageViewStyle={{marginTop : px2dp(8) ,marginBottom : px2dp(8)}}/>
                            {/*动态图书*/}
                            <DreamSNSBookView bookInfo= {dynamicInfo}/>
                            {/*点赞评论转发*/}
                            <DreamSNSBottomView info={dynamicInfo} bottomViewStyle={{marginTop: px2dp(8)}}/>
                        </View>
                    </View>
                </View>
            )
        }
}

DreamSNSDefaultDynamicCell.defaultProps ={
    dynamicInfo :{
        action : 1,
bookContentType : 1,
clientUuid : '35479074B4295699114BDF9085E2F97B0DBA48',
commentList :[],
commentNum : 0,
content :{
    cover : "http://books.mxrcorp.cn/261AFD9B8CCB4A8D852EDA3AFE37EEE5/UserPicture/bookIcon.png?t=20170407165130",
    id : '261AFD9B8CCB4A8D852EDA3AFE37EEE5',
    name : "4D彩蛋",
    star : 9,
        },
contentBookId : '261AFD9B8CCB4A8D852EDA3AFE37EEE5',
contentBookLogo : "http://books.mxrcorp.cn/261AFD9B8CCB4A8D852EDA3AFE37EEE5/UserPicture/bookIcon.png?t=20170407165130",
contentBookName : "4D彩蛋",
contentBookStarlevel : 9,
contentPic : "https://img.mxrcorp.cn/dynamic/E3A7D7AE30624270B1D7CDAE8643250A.jpg,https://img.mxrcorp.cn/dynamic/46DA5AA8BC0F4CF5A6C5B746E35F7140.jpg,https://img.mxrcorp.cn/dynamic/A7B0A2E8B9244BFEAF2C09B2896D0708.jpg",
contentPicType : " ",
contentWord : "时刻都会疯狂拉升发货时间开会时间到了黑胡椒粉数据恢复健康数据换手机号发了哈设计符合税法就离开收到回复还是连接环境宽松",
createTime : '1501424412533',
delFlag : 0,
hasPraised : 0,
id : 39447,
isSort : 0,
orderNum : 1,
praiseNum : 1,
publisher : 2,
recommend : 0,
retransmissionNum : 0,
srcStatus : 0,
subscribed : 0,
updateTime : 1501424412150,
userId : 354790,
userLogo : "http://wx.qlogo.cn/mmopen/3pDoZ3wHIcq2qSfrzQfia9CbqFYwRILGTwaCsU6PHqOD2PSk9rGfWP2Q16fwYRIDyiaydKSCAGxU1icvzuPz6YiaMic4HvB2dxI1W/0",
userName : "小礼拜",
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
    },
    user_name :{
        color : color.paragraphColor,
        fontSize : 14,
    },
    share_book :{
        color : color.timeColor,
        fontSize: 12,

    },
    dynamicTime :{
        color :color.timeColor,
        fontSize :10,
        marginTop : px2dp(4)
    }
})