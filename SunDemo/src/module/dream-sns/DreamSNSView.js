/**
 * Created by ritamashin on 2017/8/3.
 */
import React, {PureComponent} from 'react';
import {
    View, Text,TouchableOpacity,StyleSheet,SectionList,FlatList
} from 'react-native';
import px2px from '../../Utils/px2dp'

import theme from '../../config/theme'
import News from '../News'
import NavigationItem from '../../widget/NavigationItem'

import px2dp,{Screen} from '../../Utils/px2dp'
import MXRNetworkManager from '../../lib/network-manager'
import api from '../../api'
import DreamSNSHeaderView from './DreamSNSHeaderView'

export default class DreamSNSView extends PureComponent {

    static navigationOptions = ({navigation})=>({
        headerTitle : <Text style={{fontSize : 17}}>梦想圈</Text>,
        headerRight : <NavigationItem icon={require('../../res/book-sns/btn_creatSNSStatus.png')}
                                      iconStyle = {{width : px2dp(20),height : px2dp(20)}}/>,
        headerStyle : {backgroundColor:'white'}
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            topicDataArray :[]
        };
      }

    componentDidMount() {
        this._fetchTopicData();
    }

      render(){
          return (

                <View style={{flex :1 ,backgroundColor:'green'}}>
                    <DreamSNSHeaderView topicDataArray = {this.state.topicDataArray}/>
                </View>

          )
      }

      async _fetchTopicData(){
          let {data} = await new MXRNetworkManager().get(api.recommendTopicUrl);
          let dataArray = await JSON.parse(data);
          if (Array.isArray(dataArray)){
              this.setState({
                  topicDataArray: dataArray,
              });
          }
      }

}