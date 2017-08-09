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
import DreamSNSButtonItem  from './DreamSNSButtonItem'
export default class DreamSNSBottomView extends PureComponent{

    static propTypes :{
        info : React.PropTypes.object,
        bottomViewStyle : React.PropTypes.style

    }


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            info :this.props.info
        };
      }

    render (){
          let praiseTitle = this.props.info.praiseNum > 0 ? this.props.info.praiseNum : '点赞';
          let commentTitle = this.props.info.commentNum > 0 ? this.props.info.commentNum : '评论';
          let transmitTitle = '转发';
          return (
              <View style={[styles.container ,this.props.bottomViewStyle]}>
                  <DreamSNSButtonItem title={praiseTitle} normalImage={require('../../res/book-sns/btn_bookSNS_like.png')}
                                      selectedImage={require('../../res/book-sns/btn_bookSNS_like_select.png')}
                                      info={this.props.info} type="ADD_PRAISE"/>
                  <DreamSNSButtonItem title={commentTitle} normalImage={require('../../res/book-sns/btn_bookSNS_comment.png')}
                                      info={this.props.info} type="ADD_COMMENT"/>
                  <DreamSNSButtonItem title={transmitTitle} normalImage={require('../../res/book-sns/btn_bookSNS_forward.png')}
                                      info={this.props.info} type="TRANSMIT"/>
              </View>
          )
    }
}

const styles = StyleSheet.create({
    container :{
        flexDirection : 'row',
        justifyContent : 'space-between',
    }

});